import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { ResumeComponent } from '../app/resume/resume.component';
import { SkillsComponent } from '../app/skills/skills.component';
import { PortfolioComponent } from '../app/portfolio/portfolio.component';
import { ContactComponent } from '../app/contact/contact.component';
import { WeatherComponent } from '../app/weather/weather.component';


const routes: Routes = [
  // {
  //   path:  '',
  //   component:  HomeComponent
  // },
  {
    path:  'home',
    data: {
      title: 'Fran | Home',
      description: 'This is my portfolio Home page',
      ogTitle: 'This is my portfolio Home page',
    },
    component:  HomeComponent
  },
  {
    path:  'about',
    data: {
      title: 'Fran | About',
      description: 'This is my portfolio About page',
      ogTitle: 'This is my portfolio About page',
    },
    component:  AboutComponent
  },
  {
    path:  'resume',
    data: {
      title: 'Fran | Resume Page',
      description: 'This is my portfolio Resume page',
      ogTitle: 'This is my portfolio Resume page',
    },
    component:  ResumeComponent
  },
  {
    path:  'skills',
    data: {
      title: 'Fran | Skills Page',
      description: 'This is my portfolio Skills page',
      ogTitle: 'This is my portfolio Skills page',
    },
    component:  SkillsComponent
  },
  {
    path:  'portfolio',
    data: {
      title: 'Fran | Portfolio Page',
      description:  'This is my Portfolio page',
      ogTitle: 'This is my Portfolio page',
    },
    component:  PortfolioComponent
  },
  {
    path:  'contact',
    data: {
      title: 'Fran | Contact Page',
      description: 'This is my portfolio Contact page',
      ogTitle: 'This is my portfolio Contact page',
    },
    component:  ContactComponent
  },
  {
    path:  'weather',
    data: {
      title: 'Fran | Weather Page',
      description: 'This is my portfolio Weather page',
      ogTitle: 'This is my portfolio Weather page',
    },
    component:  WeatherComponent
  },
  {
    path:  '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:  '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
