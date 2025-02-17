import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ButtonComponent } from '../button/button.component';
import { UpdateDataComponent } from 'src/app/update-data/update-data.component';

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

  frameworkComponents = {updateDataRenderer: UpdateDataComponent}

  columnDefs = [

    // Radhika
    { headerName: 'ID', field: 'Id', pinned: 'left', lockPosition: true, width: 150, CellRendererFramework: 'updateDataRenderer' },

    //Prenitha
    { headerName: 'Name', field: 'Name', CellRenderer: '', cellEditor: '' },

    // Baibhav
    { headerName: 'Email', field: 'Email', CellRenderer: '', cellEditor: '' },

    // Jyotsana
    { headerName: 'Address', field: 'Address', CellRenderer: '', cellEditor: '' },

    // Paridhi and Anish
    {
      headerName: 'Marks', field: 'Marks', groupId: 'MarksGroup', marryChildren: true, CellRenderer: '', cellEditor: '',

      children: [
        { headerName: 's1', columnGroupShow: 'open' },
        { headerName: 's2', columnGroupShow: 'open' },
        { headerName: 's3', columnGroupShow: 'open' },
        { headerName: 'total' }
      ]
    }

  ];
  rowData = []

  constructor() { }

  ngOnInit(): void {
  }

  onGridReady(params: any) {

  }

}
