import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  logoWImg = './../../../../assets/images/logo.svg';
  logoBImg = './../../../../assets/images/logo_black .svg'
  activeMenu = false;


  toggleNavBar() {
    this.activeMenu = !this.activeMenu;
  }

  }
