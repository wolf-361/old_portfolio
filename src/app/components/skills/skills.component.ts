import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
    public devSkills = [
        { title: 'C', iconpath: '../assets/icons/c.ico' },
        { title: 'HTML5', iconpath: '../assets/icons/html.ico' },
        { title: 'CSS3', iconpath: '../assets/icons/css3.ico' },
        { title: 'JavaScript', iconpath: '../assets/icons/javascript.ico' },
        { title: 'TypeScript', iconpath: '../assets/icons/typescript.ico' },
        { title: 'Angular', iconpath: '../assets/icons/angular.ico' },
        { title: 'Java', iconpath: '../assets/icons/java.ico' },
        { title: 'C++', iconpath: '../assets/icons/cpp.ico' },
        { title: 'C#', iconpath: '../assets/icons/csharp.ico' },
        { title: 'Python', iconpath: '../assets/icons/python.ico' },
        { title: 'PHP', iconpath: '../assets/icons/php.ico' },
        { title: 'SQL', iconpath: '../assets/icons/sql.ico' },
        { title: 'Bootstrap', iconpath: '../assets/icons/bootstrap.ico' },
        { title: 'Material Design', iconpath: '../assets/icons/materialdesign.ico' },
    ];

    public networkSkills = [        
        { title: 'Docker', iconpath: '../assets/icons/docker.ico' },
        { title: 'Linux', iconpath: '../assets/icons/linux.ico' },
        { title: 'DNS/DHCP', iconpath: '../assets/icons/server.ico' },

    ];

    public toolSkills = [
        { title: 'GitHub', iconpath: '../assets/icons/github.ico' },
        { title: 'Visual Studio', iconpath: '../assets/icons/vs.png' },
        { title: 'VS Code', iconpath: '../assets/icons/vscode.png' },
        { title: 'IntelliJ', iconpath: '../assets/icons/intellij.png' },
        { title: 'CLion', iconpath: '../assets/icons/clion.png' },
        { title: 'Rider', iconpath: '../assets/icons/rider.png' },
        { title: 'Jira', iconpath: '../assets/icons/jira.ico' },
        { title: 'Confluence', iconpath: '../assets/icons/confluence.ico' },
        { title: 'Bitbucket', iconpath: '../assets/icons/bitbucket.ico' },
        { title: 'PenPot', iconpath: '../assets/icons/penpot.ico' },
    ];

    public langagesSkills = [
        { title: 'Français', iconpath: '../assets/icons/france.ico' },
        { title: 'English', iconpath: '../assets/icons/canada.ico' },
    ];
        
}
