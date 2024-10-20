import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AppRoutingModule } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch} from '@angular/common/http';
import { HeaderEmployerComponent } from './pages/header-employer/header-employer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, AppRoutingModule, HeaderComponent, HeaderEmployerComponent, FooterComponent, HttpClientModule],
  template: `<router-outlet></router-outlet>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent  implements OnInit {
  title = 'joblane';
  userRole: string | null = null;

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
  }
}
