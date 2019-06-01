import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: 'edit-user.dialog.html',
})

export class EditUserDialog {

  name: string;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
      this.name = this.data.name;
  }

  close() {
    this.dialogRef.close();
  }

  editUser() {
    return {
        id: this.data.id,
        name: this.name ? this.name : null
    };
  }

}
