import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-detail-em',
  standalone: true,
  imports: [
    SidebarComponent
  ],
  templateUrl: './detail-em.component.html',
  styleUrl: './detail-em.component.scss'
})
export class DetailEmComponent {

}
