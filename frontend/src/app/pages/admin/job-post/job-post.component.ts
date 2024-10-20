import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';

interface Post {
  title: string;
  employer: string;
  submissionDate: string;
  categories: string;
}

@Component({
  selector: 'app-job-post',
  templateUrl: './job-post.component.html',
  styleUrls: ['./job-post.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent]
})
export class JobPostComponent implements OnInit {
  selectedTab: string = 'pending';
  searchTerm: string = '';

  pendingPosts: Post[] = [
    { title: 'Senior Frontend Developer', employer: 'Tech Innovations Inc', submissionDate: 'April 15, 2023', categories: 'Information Technology' },
    // Thêm các dữ liệu khác
  ];
  approvedPosts: Post[] = [
    { title: 'Backend Developer', employer: 'Innovative Solutions', submissionDate: 'March 22, 2023', categories: 'Software Development' },
    // Thêm các dữ liệu khác
  ];
  rejectedPosts: Post[] = [
    { title: 'Data Scientist', employer: 'Future Tech', submissionDate: 'February 10, 2023', categories: 'Data Analysis' },
    // Thêm các dữ liệu khác
  ];

  paginatedPendingPosts: Post[] = [];
  paginatedApprovedPosts: Post[] = [];
  paginatedRejectedPosts: Post[] = [];

  rowsPerPage: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
  rowsOptions: number[] = [1, 2, 3, 5, 10];

  ngOnInit() {
    this.updatePagination();
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.currentPage = 1;
    this.updatePagination();
  }

  onRowsPerPageChange() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    if (this.selectedTab === 'pending') {
      this.totalPages = Math.ceil(this.pendingPosts.length / this.rowsPerPage);
      this.paginatePosts(this.pendingPosts);
    } else if (this.selectedTab === 'approved') {
      this.totalPages = Math.ceil(this.approvedPosts.length / this.rowsPerPage);
      this.paginatePosts(this.approvedPosts);
    } else if (this.selectedTab === 'rejected') {
      this.totalPages = Math.ceil(this.rejectedPosts.length / this.rowsPerPage);
      this.paginatePosts(this.rejectedPosts);
    }
  }

  paginatePosts(posts: Post[]) {
    const start = (this.currentPage - 1) * this.rowsPerPage;
    const end = start + this.rowsPerPage;
    if (this.selectedTab === 'pending') {
      this.paginatedPendingPosts = posts.slice(start, end);
    } else if (this.selectedTab === 'approved') {
      this.paginatedApprovedPosts = posts.slice(start, end);
    } else if (this.selectedTab === 'rejected') {
      this.paginatedRejectedPosts = posts.slice(start, end);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginatePostsBasedOnTab();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginatePostsBasedOnTab();
    }
  }

  paginatePostsBasedOnTab() {
    if (this.selectedTab === 'pending') {
      this.paginatePosts(this.pendingPosts);
    } else if (this.selectedTab === 'approved') {
      this.paginatePosts(this.approvedPosts);
    } else if (this.selectedTab === 'rejected') {
      this.paginatePosts(this.rejectedPosts);
    }
  }
}
