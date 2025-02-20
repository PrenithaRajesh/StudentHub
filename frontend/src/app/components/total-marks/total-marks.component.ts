import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-total-marks',
  templateUrl: './total-marks.component.html',
  styleUrls: ['./total-marks.component.scss']
})
export class TotalMarksComponent{

  studentId: string;
  studentName: string;
  totalMarks: number;
  average: number;
  highest: number;
  rank: number;

  constructor(
    public dialogRef: MatDialogRef<TotalMarksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    this.studentId = data.studentId;
    this.studentName = data.studentName;
    this.totalMarks = data.totalMarks;
    this.average = this.calculateAverage(data.marksList);
    this.highest = Math.max(...data.marksList);
    this.rank = this.calculateRank(data.marksList, data.totalMarks);
  }

  calculateAverage(marksList: number[]): number 
  {
    const total = marksList.reduce((acc, mark) => acc + mark, 0);
    return total / marksList.length;
  }

  calculateRank(marksList: number[], marks: number): number 
  {
    const sortedMarks = [...marksList].sort((a, b) => b - a);
    return sortedMarks.indexOf(marks) + 1;
  }

  closeDialog(): void 
  {
    this.dialogRef.close();
  }

}

