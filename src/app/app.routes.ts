import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PortfolioWebsiteComponent } from './shared/pages/portfolio-website/portfolio-website.component';
import { PortfolioComponent } from './shared/components/portfolio/portfolio.component';
import { ServiceComponent } from './shared/components/service/service.component';
import { SkillComponent } from './shared/components/skill/skill.component';

export const routes: Routes = [
  {
path:'',
component: LayoutComponent,
children: [
  {
    path:'',
    component:PortfolioWebsiteComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'services',
    component:ServiceComponent
  },
  {
    path: 'skills',
    component: SkillComponent
  }
]
  },
];
