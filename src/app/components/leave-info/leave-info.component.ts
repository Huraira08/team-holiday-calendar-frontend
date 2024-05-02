import { Component, Inject } from '@angular/core';
import { LeavePlan } from '../../models/leave-plan';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';

interface ILeaveModalData{
  leave: LeavePlan
}

@Component({
  selector: 'app-leave-info',
  styleUrl: './leave-info.component.css',
  template: `
  <nz-descriptions nzTitle="User Info" nzBordered nzLayout="vertical">
    <nz-descriptions-item nzTitle="Employee Name">{{modalData.leave.employeeName}}</nz-descriptions-item>
    <nz-descriptions-item nzTitle="Leave Start date">{{modalData.leave.leaveStartDate.toDateString()}}</nz-descriptions-item>
    <nz-descriptions-item nzTitle="Leave End date">{{modalData.leave.leaveEndDate.toDateString()}}</nz-descriptions-item>
    <ng-container *ngIf="modalData.leave.leaveReason">
      <nz-descriptions-item nzTitle="Leave reason">{{modalData.leave.leaveReason}}</nz-descriptions-item>
    </ng-container>
    
  </nz-descriptions>
  `
})
export class LeaveInfoComponent {
  constructor(@Inject(NZ_MODAL_DATA) public modalData: ILeaveModalData){}

}
