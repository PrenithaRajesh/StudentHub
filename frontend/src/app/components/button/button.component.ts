import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor(private dialog: MatDialog, private ds: DataService) { }

  ngOnInit(): void {}

  onAddUser() {
    const dialogRef = this.dialog.open(EditFormComponent, {
      width: '1200px',
      data: { 
        firstName: '', lastName: '', email: '', 
        physics: '', chemistry: '', maths: '', 
        description: '',
        profile: 'https://avatar.iran.liara.run/public/1', 
        address: '0° N, 0° E' 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('New user added:', result);
      }
    });
  }
}
