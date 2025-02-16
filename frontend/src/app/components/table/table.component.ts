import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../services/data.service';
import { MarksComponent } from 'src/app/marks/marks.component';

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
          valueGetter: (params: { data: { physics: any; chemistry: any; maths: any; }; }) => params.data.physics + params.data.chemistry + params.data.maths 
        }
      ]
    }
  ];

  rowData = [];

  LoadUsers() {
    this._DataService.getUsers().subscribe(
      (data: any) => {
        console.log('API Response:', data);
        this.rowData = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  ngOnInit(): void {
    this.LoadUsers();
  }
  private gridApi:any;
  onGridReady(params:any)
  {
    this.gridApi = params.api;
    this.gridApi.setRowData(this.rowData);

  }

  openMarksDialog(params: any) {
    const subject = params.colDef.headerName;
    const marks = params.value;
    if (marks === undefined || marks === null) return;
    const marksList = this.rowData.map(student => student[params.colDef.field]);
    this.dialog.open(MarksComponent, {
      width: '400px',
      data: { subject, marks, marksList }
    });
  }
}
