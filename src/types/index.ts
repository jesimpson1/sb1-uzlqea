export interface TimeRange {
  code: number;
  name: string;
  dateFrom: string;
  dateTo: string;
}

export interface DaySchedule {
  date: string;
  rangeList: TimeRange[];
}