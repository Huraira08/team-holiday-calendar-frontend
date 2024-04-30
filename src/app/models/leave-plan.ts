export interface LeavePlan {
    id?: string,
    employeeName: string;
    leaveStartDate: Date;
    leaveEndDate: Date;
    leaveReason?: string;
    badgeColor?: string;
}
