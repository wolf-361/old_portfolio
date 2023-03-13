import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'ToutdouxList - (en cours)',
      description: 'Application web et mobile de gestion de tâches et de notes',
      list: [
        'Développement d\'une application web et mobile avec Ionic Angular',
        'Design de l\'application avec Penpot',
        'Backend ExpressJS pour la gestion des utilisateurs et des tâches',
        'Base de données MariaDB',
        'Self hosting eventuel avec disponibilité sur IOS et Android',
      ],
      skills: [
        {
          title: 'Javascript',
          iconPath: '../assets/icons/javascript.ico',
        },
        {
          title: 'Ionic',
          iconPath: '../assets/icons/ionic.ico',
        },
        {
          title: 'Angular',
          iconPath: '../assets/icons/angular.ico',
        },
        {
          title: 'ExpressJS',
          iconPath: '../assets/icons/expressjs.png',
        },
        {
          title: 'MariaDB',
          iconPath: '../assets/icons/mariadb.png',
        },
        {
          title: 'Penpot',
          iconPath: '../assets/icons/penpot.png',
        },
        {
          title: 'GitHub',
          iconPath: '../assets/icons/github.ico',
        },
      ],
      link: null,
      github: 'https://github.com/wolf-361/toutdouxlist',
    },
    {
      title: 'portfolio',
      description: 'Ce site est mon portfolio',
      list: [
        'Développement d\'un site web en Angular',
        'Utilisation de la librairie Angular Material',
        'Utilisation de Github Actions pour le déploiement automatique avec une image Docker',
        'Backend ExpressJS pour la validation du reCaptcha',
      ],
      skills: [
        {
          title: 'Javascript',
          iconPath: '../assets/icons/javascript.ico',
        },
        {
          title: 'Angular',
          iconPath: '../assets/icons/angular.ico',
        },
        {
          title: 'Angular Material',
          iconPath: '../assets/icons/materialdesign.png',
        },
        {
          title: 'ExpressJS',
          iconPath: '../assets/icons/expressjs.png',
        },
        {
          title: 'GitHub',
          iconPath: '../assets/icons/github.ico',
        },
      ],
      link: null,
      github: 'https://github.com/wolf-361/portfolio',
    },
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
        {
          title: 'Ubuntu',
          iconPath: '../assets/icons/ubuntu.ico',
        },
        {
          title: 'Linux',
          iconPath: '../assets/icons/linux.ico',
        },
      ],
      link: null,
      github: null,
    },
    {
      title: 'Studently',
      description: 'Application web conçue pendant le hackathon anglophone "CodeJam" à l\'université de McGill',
      list: [
        'Application d\'organisation, de méditation et de mise de relation entre étudiants',
        'Réalisé en 36h en équipe de 4 personnes',
      ],
      skills: [
        {
          title: 'Javascript',
          iconPath: '../assets/icons/javascript.ico',
        },
        {
          title: 'Docker',
          iconPath: '../assets/icons/docker.ico',
        },
        {
          title: 'GitHub',
          iconPath: '../assets/icons/github.ico',
        },
        {
          title: 'Anglais',
          iconPath: '../assets/icons/canada.ico',
        },
      ],
      link: 'https://devpost.com/software/studently',
      github: 'https://github.com/wolf-361/Studently-CodeJam12',
    },
  ];
}
