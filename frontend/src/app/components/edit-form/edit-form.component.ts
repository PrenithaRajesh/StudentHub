import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dataService: DataService,
    private dialogRef: MatDialogRef<EditFormComponent>) { }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const updatedStudent = { ...this.data, ...form.value };
      this.dataService.updateUser(updatedStudent.studentId, updatedStudent).subscribe(response => {
        alert('Student data updated successfully!');
        this.dialogRef.close();
        window.location.reload();
      }, (error: any) => {
        console.error('Error updating user:', error);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
    window.location.reload();
  }

}
