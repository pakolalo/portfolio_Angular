import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ServiceComponent } from '../../components/service/service.component';
import { SkillComponent } from '../../components/skill/skill.component';

@Component({
  selector: 'app-portfolio-website',
  standalone: true,
  imports: [HeroComponent, PortfolioComponent, ServiceComponent, SkillComponent],
  templateUrl: './portfolio-website.component.html',
  styleUrl: './portfolio-website.component.css'
})
export class PortfolioWebsiteComponent {

}
