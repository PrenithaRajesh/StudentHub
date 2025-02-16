import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {
  subject: string;
  marks: number;
  average: number;
  highest: number;
  rank: number;

  constructor(
    public dialogRef: MatDialogRef<MarksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.subject = data.subject;
    this.marks = data.marks;
    this.average = this.calculateAverage(data.marksList);
    this.highest = Math.max(...data.marksList);
    this.rank = this.calculateRank(data.marksList, data.marks);
  }

  calculateAverage(marksList: number[]): number {
    const total = marksList.reduce((acc, mark) => acc + mark, 0);
    return total / marksList.length;
  }

  calculateRank(marksList: number[], marks: number): number {
    const sortedMarks = [...marksList].sort((a, b) => b - a);
    return sortedMarks.indexOf(marks) + 1;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
