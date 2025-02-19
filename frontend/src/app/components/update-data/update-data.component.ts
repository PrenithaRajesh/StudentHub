import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent {

  params: any;

  constructor(private dialog: MatDialog) { }

  agInit(params: any): void {
    this.params = params;
  }

  onClick() {
    const rowData = this.params.node.data;
    console.log(`clicked on ID = ${this.params.value}`)

    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '400px',
      data: rowData
    });
  }

}
