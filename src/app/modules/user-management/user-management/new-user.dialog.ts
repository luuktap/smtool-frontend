import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'new-user-dialog',
  templateUrl: 'new-user.dialog.html',
})

export class NewUserDialog {

  name: string;

  constructor(
    public dialogRef: MatDialogRef<NewUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  close() {
    this.dialogRef.close();
  }

  addNewUser() {
    return {
      name: this.name ? this.name : null
    };
  }

}
