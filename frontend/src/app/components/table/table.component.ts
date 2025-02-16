import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

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
    {headerName:'ID', field: 'Id' , CellRenderer:'', cellEditor:''},

    //Prenitha
    { headerName:'Name',field: 'Name' , CellRenderer:'', cellEditor:''},

    // Baibhav
    { headerName:'Email',field: 'Email' , CellRenderer:'', cellEditor:''},

    // Jyotsana
    { headerName:'Address',field:'Address', CellRenderer:'', cellEditor:''},

    // Paridhi and Anish
    {headerName:'Marks' , field:'Marks', groupId:'MarksGroup', marryChildren:true,CellRenderer:'', cellEditor:'' ,

      children:[
        {headerName: 's1',columnGroupShow:'open'},
        {headerName:'s2',columnGroupShow:'open'},
        {headerName:'s3',columnGroupShow:'open'},
        {headerName:'total' }
      ]
    }
    
  ];
  rowData = []

  

  ngOnInit(): void {
  }

  onGridReady(params:any)
  {

  }

}
