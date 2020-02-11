import { Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../services/main.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';



export interface UserProfile {
  username :string;
  email : string;
  password : string;
  role : string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [MainService]
})

export class UsersComponent implements OnInit {
private dataSource;
private displayedColumns: String[] = ['username', 'email', 'role'];

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private mainService: MainService) { }

  ngOnInit() {

      this.mainService.getUsers()
      .subscribe(
           (data : any)  => {
              this.dataSource = new MatTableDataSource<UserProfile>(data);
              this.dataSource.paginator = this.paginator;
           }
       );

  }

}
