import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    public devSkills = [
        { name: 'HTML5', iconpath: '../assets/icons/html.ico' },
        { name: 'CSS3', iconpath: '../assets/icons/css3.ico' },
        { name: 'JavaScript', iconpath: '../assets/icons/javascript.ico' },
        { name: 'TypeScript', iconpath: '../assets/icons/typescript.ico' },
        { name: 'Angular', iconpath: '../assets/icons/angular.ico' },
        { name: 'Node.js', iconpath: '../assets/icons/nodejs.ico' },
    ];

        
}
