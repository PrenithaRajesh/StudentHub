import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../../services/data.service';
import { MarksComponent } from '../marks/marks.component';
import { TotalMarksComponent } from 'src/app/components/total-marks/total-marks.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  constructor(private _DataService: DataService, private dialog: MatDialog) {}


  defaultColDef = {

  }

  defaultColGroupDef = {
  
  }

  frameworkComponents = [
    
  ]

  columnDefs = [

    // Radhika
    {headerName:'ID', field: 'studentId' , CellRenderer:'', cellEditor:''},

    //Prenitha
    { headerName:'Name',field: 'firstName' , CellRenderer:'', cellEditor:''},

    // Baibhav
    { headerName:'Email',field: 'email' , CellRenderer:'', cellEditor:''},

    // Jyotsana
    { headerName:'Address',field:'address', CellRenderer:'', cellEditor:''},
    
    // Paridhi and Anish
    { 
      headerName: 'Marks', 
      groupId: 'MarksGroup', 
      marryChildren: true,
      children: [
        { headerName: 'Physics', field: 'physics', onCellClicked: (params: any) => this.openMarksDialog(params),  columnGroupShow: 'open' },
        { headerName: 'Chemistry', field: 'chemistry', onCellClicked: (params: any) => this.openMarksDialog(params),  columnGroupShow: 'open'  },
        { headerName: 'Maths', field: 'maths', onCellClicked: (params: any) => this.openMarksDialog(params),  columnGroupShow: 'open'  },
        { 
          headerName: 'Total', 
          field: 'totalMarks',
          onCellClicked: (params: any) => this.openTotalMarksDialog(params)
        }
      ]
    }
  ];

  rowData: { studentId: number; firstName: string; email: string; address: string; physics: number; chemistry: number; maths: number; totalMarks?: number; }[] = [];

  //private gridApi: any;

  LoadUsers() {
    this._DataService.getUsers().subscribe(
      (data: any) => {
        console.log('API Response:', data);
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
    this.LoadUsers();
  }

  onGridReady(params: any) {
    //this.gridApi = params.api;
    //this.gridApi.setRowData(this.rowData);
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
}