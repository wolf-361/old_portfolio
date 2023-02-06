import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Auto hébergement',
      description: 'Hébergement de ce site sur un serveur dédié chez moi',
      list: [
        'Achat d\'un serveur, configuration et exploitation chez moi', 
        'Installation : Ubuntu server et Docker', 
        'Sécurisation via Fail2Ban, firewall, monitoring, scan rootkit et cloudflare',
        'Ce site est hébergé sur ce serveur',
      ],
      skills: [
        {
          title: 'Docker',
          iconPath: '../assets/icons/docker.ico',
        },
      ],
      link: null,
      github: null,
    },
  ];
}
