import { Component, signal } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectComponent } from '../project/project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, ProjectComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = signal<Project[]>([]);

  constructor() {
    const initProjects: Project[] = [
      {
        img: './../../../../assets/images/ojos_ajenos.jpg',
        title: 'Ojos Ajenos',
        text: 'Website Design / Development',
        projectUrl: 'https://pakolalo.github.io/ojos_ajenos/',
      },
      {
        img: './../../../../assets/images/beble_page.jpg',
        title: 'Beble',
        text: 'Website Design / Development',
        projectUrl: 'https://beble.mx',
      },
      {
        img: './../../../../assets/images/portfolio_em.jpg',
        title: 'Portfolio EM',
        text: 'Development',
        projectUrl: 'https://estebanmartinez.site',
      },
      {
        img: './../../../../assets/images/veredas_de_mexico.jpg',
        title: 'Veredas de México',
        text: 'Website Design / Development',
        projectUrl: 'https://veredasdemexico.com',
      },
      {
        img: './../../../../assets/images/the_shop.jpg',
        title: 'The Shop',
        text: 'Development',
        projectUrl: 'https://pakolalo.github.io/The_Shop/',
      },
      {
        img: './../../../../assets/images/batatabit.jpg',
        title: 'Batatabit',
        text: 'Development',
        projectUrl: 'https://pakolalo.github.io/batatabit/',
      },
      {
        img: './../../../../assets/images/lego_super_heroes.jpg',
        title: 'Lego Super Heroes',
        text: 'Development',
        projectUrl: 'https://pakolalo.github.io/Lego-Super-Heroes/',
      },
      {
        img: './../../../../assets/images/trello_clone.jpg',
        title: 'Trello-Clone',
        text: 'Angular / Development',
        projectUrl: 'https://trello-clone-delta-lyart.vercel.app',
      },
      {
        img: './../../../../assets/images/My_Day_App.jpg',
        title: 'My Day App',
        text: 'Angular / Development',
        projectUrl: 'https://todoapp-xi-eosin.vercel.app/',
      },
      {
        img: './../../../../assets/images/angular_store.jpg',
        title: 'Angular Store',
        text: 'Angular / Development',
        projectUrl: 'https://store-psi-bay.vercel.app/',
      },
      {
        img: './../../../../assets/images/hey_movies.jpg',
        title: 'Hey Movies',
        text: 'Web App / Development',
        projectUrl: 'https://pakolalo.github.io/hey_movies/',
      },
      {
        img: './../../../../assets/images/rick_and_morty.jpg',
        title: 'Rick and Morty Facts',
        text: 'Web App / Development',
        projectUrl: 'https://pakolalo.github.io/Rick-and-Morty/',
      },
    ];
    this.projects.set(initProjects);
  }

}
