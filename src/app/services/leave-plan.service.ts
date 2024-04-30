import { Injectable } from '@angular/core';
import { LeavePlan } from '../models/leave-plan';

@Injectable({
  providedIn: 'root'
})
export class LeavePlanService {
  private leavePlan: LeavePlan[] = [
    {
      employeeName: 'Aslam',
      leaveStartDate: new Date(2024, 3, 1),
      leaveEndDate: new Date(2024, 3, 10),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Babar',
      leaveStartDate: new Date(2024, 3, 1),
      leaveEndDate: new Date(2024, 3, 5),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Jameel',
      leaveStartDate: new Date(2024, 3, 1),
      leaveEndDate: new Date(2024, 3, 8),
      leaveReason: 'Sick'
    },
    {
      employeeName: 'Azeem',
      leaveStartDate: new Date(2024, 3, 11),
      leaveEndDate: new Date(2024, 3, 11),
      leaveReason: 'Urgent work'
    },
    {
      employeeName: 'Rizwan',
      leaveStartDate: new Date(2024, 3, 13),
      leaveEndDate: new Date(2024, 3, 16),
    },
  ]
  constructor() { }

  getLeavePlan(): LeavePlan[] {
    return this.leavePlan;
  }
}
