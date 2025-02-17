import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent implements OnInit {
  firstname!: string;
  lastname!: string;
  profile!: string;
  description!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data.params.data);
  }

  ngOnInit(): void {
    this.firstname = this.data.params.data.firstName;
    this.lastname = this.data.params.data.lastName;
    this.profile = this.data.params.data.profile;
    this.description = this.data.params.data.description;
  }
}
