import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component'; 
import { ProjectsComponent } from './components/projects/projects.component';
import { FormationsComponent } from './components/formations/formations.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'experiences', component: ExperiencesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
