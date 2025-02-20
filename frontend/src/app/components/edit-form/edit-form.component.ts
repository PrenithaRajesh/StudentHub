import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    private dialogRef: MatDialogRef<EditFormComponent>) { }
  
    mode: string = 'Edit';

    ngOnInit(): void {
      if (!this.data.studentId) {
        this.mode = 'Add';
      }

    onSubmit(form: NgForm): void {
      if (form.valid) {
        const updatedStudent = { ...this.data, ...form.value };
    
        if (this.data.studentId) {
          // Existing User (Update)
          this.dataService.updateUser(updatedStudent.studentId, updatedStudent).subscribe(response => {
            alert('Student data updated successfully!');
            this.dialogRef.close(updatedStudent);
          }, (error: any) => {
            console.error('Error updating user:', error);
          });
        } else {
          // New User (Create)
          console.log('New student:', updatedStudent);
          this.dataService.addUser(updatedStudent).subscribe(response => {
            alert('New student added successfully!');
            this.dialogRef.close(response); // Close the dialog and pass the new user data
            this.dataService.notifyUserChange(); // Notify components about the change
          }, (error: any) => {
            console.error('Error adding user:', error);
          });
        }
      }
    }    

  onCancel(): void {
    this.dialogRef.close();
  }

}
