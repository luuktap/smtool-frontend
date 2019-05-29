import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface testData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = ['id', 'name', 'actions'];
  testData: testData[] = [
    {id: 1, name: 'Hydrogen'},
    {id: 2, name: 'Helium'},
    {id: 3, name: 'Lithium'},
    {id: 4, name: 'Beryllium'},
    {id: 5, name: 'Boron'},
    {id: 6, name: 'Carbon'},
    {id: 7, name: 'Nitrogen'},
    {id: 8, name: 'Oxygen'},
    {id: 9, name: 'Fluorine'},
    {id: 10, name: 'Neon'},
    {id: 11, name: 'Sodium'},
    {id: 12, name: 'Magnesium'},
    {id: 13, name: 'Aluminum'},
    {id: 14, name: 'Silicon'},
    {id: 15, name: 'Phosphorus'},
    {id: 16, name: 'Sulfur'},
    {id: 17, name: 'Chlorine'},
    {id: 18, name: 'Argon'},
    {id: 19, name: 'Potassium'},
    {id: 20, name: 'Calcium'}
  ];
  dataSource: MatTableDataSource<testData>;
  filterText: string = '';

  constructor() {
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
}