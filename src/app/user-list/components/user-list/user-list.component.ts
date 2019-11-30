import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../../shared/User';
import { UserCache } from '../../service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'firstName', 'lastName'];
    dataSource;
    isLoading: boolean;
  
    @ViewChild(MatSort, {static: true}) sort: MatSort;
  
    constructor(private readonly userService: UserCache) {
    }
  
    ngOnInit(): void {
        this.isLoading = true;
        this.userService.getUsers()
            .subscribe((data: User[]) => {
                this.isLoading = false; // User List Spinner 
                this.dataSource = new MatTableDataSource(data);
                this.dataSource.sort = this.sort;
        });
    }
}
