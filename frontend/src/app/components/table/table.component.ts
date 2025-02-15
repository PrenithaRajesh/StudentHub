import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params:any)
  {

  }

}
