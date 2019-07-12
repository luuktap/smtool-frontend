import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { NewUserDialog } from './new-user.dialog';
import { EditUserDialog } from './edit-user.dialog';

export interface testData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'actions'];
  testData: testData[] = [];

  dataSource: MatTableDataSource<testData>;
  filterText: string = '';

  constructor(
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.testData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addDataToTable(data: testData) {
    this.testData.push(data);
    this.dataSource.data = this.testData;
  }

  newUser() {
    let newUserDialog = this.dialog.open(NewUserDialog, {
      width: '250px'
    });

    newUserDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.addDataToTable({
          id: (this.testData.length + 1),
          name: result.name
        })
      }
    });
  }

  editUser(id, name) {
    const editUserDialog = this.dialog.open(EditUserDialog, {
      width: '250px',
      data: { id, name }
    });

    editUserDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        let userToEdit = this.testData.find(user => { return user.id == result.id; })
        userToEdit.name = result.name;
        this.dataSource.data = this.testData;
        // this.addDataToTable({
        //   id: (this.testData.length + 1),
        //   name: result.name
        // })
      }
    });
  }

  removeUser(id) {
    let index = this.testData.map(user => { return user.id; }).indexOf(id);
    this.testData.splice(index, 1);
    this.dataSource.data = this.testData;
  }

}
