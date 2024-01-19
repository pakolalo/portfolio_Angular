import { Component } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {

  development = './../../../../assets/images/bx-terminal.svg'
  developmentW = './../../../../assets/images/bx-terminalW.svg'
  seo = './../../../../assets/images/bxs-bar-chart-alt-2.svg'
  seoW = './../../../../assets/images/bxs-bar-chart-alt-2W.svg'
  design = './../../../../assets/images/bx-edit.svg'
  designW = './../../../../assets/images/bx-editW.svg'

}
