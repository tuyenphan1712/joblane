import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SidebarComponent
  ]
})

export class EmployerComponent implements OnInit {
  userList: any[] = [];
  paginatedEmployers: any[] = [];
  searchTerm: string = '';
  rowsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  rowsOptions: number[] = [1, 2, 3, 5, 10];

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/listEmployers').subscribe(data => {
      this.userList = data;  
      console.log(this.userList); // Add this line
      this.paginatedEmployers = data;
   
    });
  }
/*       
    // Giả lập dữ liệu employers
    this.employers = [
      
      { name: 'Selena Gomez', email: 'abcxyz@gmail.com', phone: '097xxxxxxx', registryTime: '21:32', registryDate: '26/03/2023' },
      { name: 'Selena Gomez', email: 'abcxyz@gmail.com', phone: '097xxxxxxx', registryTime: '21:32', registryDate: '26/03/2023' },
      // Thêm các dữ liệu khác nếu cần
    ];
    this.updatePagination();
  } */

  onRowsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.userList.length / this.rowsPerPage);
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    this.paginatedEmployers = this.userList.slice(start, end);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginate();
    }
  }
}
