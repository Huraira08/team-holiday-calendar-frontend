import { Component, OnInit } from '@angular/core';
import { LeavePlanService } from '../../services/leave-plan.service';
import { LeavePlan } from '../../models/leave-plan';
import { isWithinInterval, startOfDay, endOfDay } from 'date-fns';
import { NzModalService } from 'ng-zorro-antd/modal';
import { LeaveInfoComponent } from '../../components/leave-info/leave-info.component';

@Component({
  selector: 'app-calendar-page',
  templateUrl: './calendar-page.component.html',
  styleUrl: './calendar-page.component.css'
})
export class CalendarPageComponent implements OnInit {
  leavePlan: LeavePlan[] = []
  constructor(private leaveService: LeavePlanService,
    private modal: NzModalService
  ){
    console.log(leaveService.getLeavePlan())
  }
  ngOnInit(): void {
    this.leavePlan = this.leaveService.getLeavePlan();
  }

  openLeaveInfoModal(leave: LeavePlan){
    const modal = this.modal.create<LeaveInfoComponent>({
      // nzTitle: 'Leave Information',
      nzContent: LeaveInfoComponent,
      nzData: {
        leave: leave
      },
      // nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000)),
      nzFooter: null,
    });
  }

  isWithinRange(date: Date, startDate: Date, endDate: Date): boolean {
    console.log(date)
    console.log(startDate)
    return isWithinInterval(date, { start: startOfDay(startDate), end: endOfDay(endDate) });
  }
}
