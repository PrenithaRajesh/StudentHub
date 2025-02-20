import { Component, inject, Injectable, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { MarksComponent } from '../marks/marks.component';
import { AddMapComponent } from '../add-map/add-map.component';
import { NameComponent } from '../name/name.component';
import { TotalMarksComponent } from '../total-marks/total-marks.component';
import { UpdateDataComponent } from 'src/app/components/update-data/update-data.component';
import { EmailComponent } from '../email/email.component';
import { LocationService } from 'src/app/services/location.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

@Injectable({ providedIn: 'root' })
export class TableComponent implements OnInit {
  constructor(private _DataService: DataService, private dialog: MatDialog) {}

  @ViewChild(AgGridAngular) agGrid?: AgGridAngular; 

  loc = inject(LocationService);

  frameworkComponents = { updateDataRenderer: UpdateDataComponent }
  columnDefs = [

    { headerName: 'ID', field: 'studentId', pinned: 'left', suppressMovable: true, cellRendererFramework: UpdateDataComponent, width: 60 },

    { headerName:'Name',field: 'firstName' , onCellClicked: (params: any) => this.openNameDialog(params), columnGroupShow: 'open'},

    { 
      headerName:'Email',
      field:'email', 
      CellRenderer:'emailRenderer', 
      onCellClicked: (params: any) => 
        this.openEmailDialog(params),
      columnGroupShow: 'open'},

    { headerName: 'Address', field: 'address', onCellClicked: (params: any) => this.openAddDialog(params), columnGroupShow: 'open' },

    {
      headerName: 'Marks',
      groupId: 'MarksGroup',
      marryChildren: true,
      children: [
        { headerName: 'Physics', field: 'physics', onCellClicked: (params: any) => this.openMarksDialog(params), columnGroupShow: 'open' },
        { headerName: 'Chemistry', field: 'chemistry', onCellClicked: (params: any) => this.openMarksDialog(params), columnGroupShow: 'open' },
        { headerName: 'Maths', field: 'maths', onCellClicked: (params: any) => this.openMarksDialog(params), columnGroupShow: 'open' },
        {
          headerName: 'Total',
          field: 'totalMarks',
          onCellClicked: (params: any) => this.openTotalMarksDialog(params)
        }
      ]
    }
  ];

  rowData: { studentId: number; firstName: string; email: string; address: string; physics: number; chemistry: number; maths: number; totalMarks?: number; }[] = [];



LoadUsers() {
  this._DataService.getUsers().subscribe(
    (data: any) => {
      this.rowData = data.map((student: any) => ({
        ...student,
        totalMarks: student.physics + student.chemistry + student.maths
      }));
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
  );
}

ngOnInit(): void {
  this._DataService.userChanged$.subscribe(() => {
    this.refreshGrid();
  });
  this.LoadUsers();
}

refreshGrid() {
  this.agGrid?.api.setRowData(this.rowData);
  this.agGrid?.api.refreshCells();
}

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();

  }

  openMarksDialog(params: any) {
    const subject = params.colDef.headerName;
    const marks = params.value;
    if (marks === undefined || marks === null) return;
    const marksList = this.rowData.map(student => student[params.colDef.field as keyof typeof student]);
    this.dialog.open(MarksComponent, {
      width: '400px',
      data: { subject, marks, marksList }
    });
  }



  //For address : Baibhav
  openAddDialog(params: any) {
    this.dialog.open(AddMapComponent, {
      width: '400px',
      data: { params }
    });
  }

  openNameDialog(params: any) {
    this.dialog.open(NameComponent, {
      width: '800px',
      data: { params }
    })
  }

  openTotalMarksDialog(params: any) {
    const student = params.data;
    const totalMarks = student.totalMarks;
    const marksList = this.rowData.map(student => student.totalMarks);

    this.dialog.open(TotalMarksComponent, {
      width: '400px',
      data: {
        studentId: student.studentId,
        studentName: student.firstName,
        totalMarks: totalMarks, 
        marksList
      }
    });
  }

  openEmailDialog(params: any) {
    const receiverEmail = params.data.email;
    this.dialog.open(EmailComponent, {
      width: '400px',
      data: { receiverEmail },
      autoFocus: false 
    });
  }
}


