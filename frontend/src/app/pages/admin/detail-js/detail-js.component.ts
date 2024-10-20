import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-detail-js',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './detail-js.component.html',
  styleUrl: './detail-js.component.scss'
})
export class DetailJsComponent {

}
