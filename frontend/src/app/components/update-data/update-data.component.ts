import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements ICellRendererAngularComp {

  params: any;

  constructor(private dialog: MatDialog) {}

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  onClick() {
    const rowData = this.params.node.data;
    console.log(`clicked on ID = ${this.params.value}`)

    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '400px',
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Form closed with result:', result);
    });
  }

}
