import { OnInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { UsermanagementDataSource } from './usermanagement-datasource';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: UsermanagementDataSource;

  displayedColumns = ['id', 'name', 'actions'];

  filterText = '';

  ngOnInit() {
    this.dataSource = new UsermanagementDataSource(this.paginator, this.sort);
  }
  
}
