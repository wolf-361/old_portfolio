import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    public devSkills = [
        { title: 'HTML5', iconpath: '../assets/icons/html.ico' },
        { title: 'CSS3', iconpath: '../assets/icons/css3.ico' },
        { title: 'JavaScript', iconpath: '../assets/icons/javascript.ico' },
        { title: 'TypeScript', iconpath: '../assets/icons/typescript.ico' },
        { title: 'Angular', iconpath: '../assets/icons/angular.ico' },
    ];

    public networkSkills = [
        { title: 'TCP/IP', iconpath: '../assets/icons/tcpip.ico' },
    ];

    public toolSkills = [
        { title: 'Git', iconpath: '../assets/icons/git.ico' },
    ];

    public langagesSkills = [
        { title: 'Français', iconpath: '../assets/icons/france.ico' },
    ];
        
}
