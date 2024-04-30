import { Component, OnInit } from '@angular/core';
import { LeavePlanService } from '../../services/leave-plan.service';
import { LeavePlan } from '../../models/leave-plan';
import { isWithinInterval, startOfDay, endOfDay, addDays, differenceInDays } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LeaveInfoComponent } from '../../components/leave-info/leave-info.component';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent implements OnInit {
  leavePlans: LeavePlan[] = []
  leavePlansMap: Map<number, LeavePlan[]> = new Map();
  colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime'
  ];

  DateColorsMap: Map<number, string[]> = new Map();

  constructor(private leaveService: LeavePlanService,
    private modal: NzModalService
  ){
    // console.log(leaveService.getLeavePlan())
  }
  async ngOnInit() {
    let colors = [...this.colors];
    this.leavePlans = this.leaveService.getLeavePlan();
    console.log(this.leavePlans)
    for(let leavePlan of this.leavePlans){
      const color = colors.pop();
      leavePlan.badgeColor = color;
      const key = leavePlan.leaveStartDate.getTime();
      if(!this.leavePlansMap.has(key)){
        this.leavePlansMap.set(key, [])
      }
      this.leavePlansMap.get(key)?.push(leavePlan)
      const numberOfDays = differenceInDays(leavePlan.leaveEndDate, leavePlan.leaveStartDate)
      let currentDate = addDays(leavePlan.leaveStartDate,  1)
      for(let i = 0;i < numberOfDays; i++){
        if(!this.DateColorsMap.has(currentDate.getTime())){
        this.DateColorsMap.set(currentDate.getTime(), [])
      }
        this.DateColorsMap.get(currentDate.getTime())!.push(color!)
        // this.DateColorsMap.set(currentDate.getTime(), color!)
        currentDate = addDays(currentDate, 1)
      }
      if(colors.length === 0){
        colors = [...this.colors]
      }
    }
    console.log(this.DateColorsMap)
  }

  openLeaveInfoModal(leave: LeavePlan){
    const modal = this.modal.create<LeaveInfoComponent>({
      nzContent: LeaveInfoComponent,
      nzData: {
        leave: leave
      },
      nzFooter: null,
    });
  }

  isLeaveStartDate(date: Date){
    return this.leavePlansMap.has(startOfDay(date).getTime());
    // if(this.leavePlansMap.has(startOfDay(date).getTime())){
    //   const leavePlan = this.leavePlansMap.(startOfDay(date).getTime());
      
    //   return true
    // }
    // return false;
  }
  getLeaveObjList(date: Date){
    if(this.leavePlansMap.has(startOfDay(date).getTime())){
      const plans = this.leavePlansMap.get(date.getTime())!
      // console.log(plans)
      // for(let plan of plans){
      //   const numberOfDays = differenceInDays(plan.leaveStartDate, plan.leaveEndDate)
      //   const currentDate = addDays(plan.leaveStartDate,  1)
      //   // console.log(`for employee ${plan.employeeName}`)
      //   for(let i = 0;i < numberOfDays;i++){
      //     console.log(currentDate.toDateString())
      //   }
      // }
      return plans;
    }
    return [];
  }

  getColorsFromDate(date: Date){
    return this.DateColorsMap.get(date.getTime())
  }

  isWithinRange(date: Date, startDate: Date, endDate: Date): boolean {
    console.log(date)
    console.log(startDate)
    return isWithinInterval(date, { start: startOfDay(startDate), end: endOfDay(endDate) });
  }
}
