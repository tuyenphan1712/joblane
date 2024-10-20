import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignIn1Component } from './pages/sign-in-1/sign-in-1.component';
import { SignIn2Component } from './pages/sign-in-2/sign-in-2.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { JobPostDetailComponent } from './pages/job-post-detail/job-post-detail.component';

import { ApplicantListComponent} from './pages/applicant-list/applicant-list.component'
import { PostListComponent} from './pages/post-list/post-list.component'
import { PersonalEmployerComponent} from './pages/personal-employer/personal-employer.component'
import { PersonalJobSeekerComponent} from './pages/personal-jobseeker/personal-jobseeker.component'
import {FavListComponent} from './pages/fav-list/fav-list.component'
import {ListAppliedJobComponent} from './pages/list-applied-job/list-applied-job.component'
import { NewCompanyComponent } from './pages/new-company/new-company.component';
import { ApplyCVComponent } from './pages/apply-cv/apply-cv.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CompanyComponent } from './pages/company/company.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { PostNewJobComponent } from './pages/post-new-job/post-new-job.component';
import { JobSeekerComponent } from './pages/admin/job-seeker/job-seeker.component';
import { EmployerComponent } from './pages/admin/employer/employer.component';
import { JobPostComponent } from './pages/admin/job-post/job-post.component';
import { DetailJsComponent } from './pages/admin/detail-js/detail-js.component';
import { DetailEmComponent } from './pages/admin/detail-em/detail-em.component';
import { DetailPostComponent } from './pages/admin/detail-post/detail-post.component';


import { NgModule } from '@angular/core';



export const routes: Routes = [

  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-in-1', component: SignIn1Component},
  { path: 'sign-in-2', component: SignIn2Component},
  { path: 'forget-password', component: ForgetPasswordComponent},
  { path: 'search-result', component: SearchResultsComponent},
  { path: 'job-post-detail', component: JobPostDetailComponent},
  { path: 'applicant-list', component: ApplicantListComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'personal-employer', component: PersonalEmployerComponent},
  { path: 'personal-jobseeker', component: PersonalJobSeekerComponent},
  { path: 'fav-list', component: FavListComponent},
  { path: 'list-applied-job', component: ListAppliedJobComponent},
  { path: 'new-company', component: NewCompanyComponent},
  { path: 'apply-cv', component: ApplyCVComponent},
  { path: 'home', component: HomepageComponent},
  {path:'company',component: CompanyComponent, pathMatch:'full'},
  {path:'categories',component: CategoriesComponent, pathMatch:'full'},
  { path: 'post-new-job', component: PostNewJobComponent},
  {path:'job-seeker',component: JobSeekerComponent, pathMatch:'full'},
  {path:'employer',component: EmployerComponent, pathMatch:'full'},
  {path:'job-post-list',component: JobPostComponent, pathMatch:'full'},
  {path:'detail-js',component: DetailJsComponent, pathMatch:'full'},
  {path:'detail-em',component: DetailEmComponent, pathMatch:'full'},
  {path:'detail-post',component: DetailPostComponent, pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }