import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  gitHubLogo = './../../../../assets/images/bxl-github.svg';
  linkedinLogo = './../../../../assets/images/bxl-linkedin-square.svg'
}
