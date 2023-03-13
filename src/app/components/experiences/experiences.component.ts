import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  public experiences = [
    {
      title: 'Programmeur - ASUQTR (Sous marin autonome)',
      date: '2023',
      description:
        'Membre de l\'équipe programmation responsable de la programmation des différentes parties du sous-marin. ',
      list: [
        'Gestion IT pour l\'association',
        'Passage de jetson linux 18.04 à 20.04 et installation de ROS',
        'Update du scrip d\'installation en conséquence',
      ],
      iconTitle: 'ASUQTR',
      iconPath: '../assets/icons/ASUQTR.png',
      link: 'https://asuqtr.com/',
    },
    {
      title: 'Vice-président des affaires académiques - AMI UQTR',
      date: '2022 - 2023',
      description:
        "J'ai été élu vice-président des affaires académiques pour les session d'automne et d'hivers. " +
        "J'ai été responsable de supporter la formation académique en proposant des activités éducatives. " +
        "De plus j'ai assuré la représentation de l'AMI sur les comités de programmes du DMI (Département de mathématique et d'informatique). ",
      list: [
        'Création du site web et self hosting avec Wordpress (en cours)', 
        'Création d\'un artwork pour l\'association',
        'Organisation de la conférence vin et fromage (en cours)',
        'Organisation de blitz de programmation (en cours)',
      ],
      iconTitle: 'AMI',
      iconPath: '../assets/icons/AMI.png',
      link: 'https://ami.uqtr.ca/',
    },
    {
      title: 'Assistant de recherche - mcLab',
      date: '2022',
      description:
        'Participation aux réunions hebdomadaires et aux conférences du groupe. ' +
        'Mes projets principaux étant le site web du groupe et le retravailles des notes de cours. ',
      list: ['Création du site web avec Wordpress (en cours)', 'Traduction et optimisation des expériences du cours CPH1020'],
      iconTitle: '',
      iconPath: '../assets/icons/uqtr.png',
      link: '',
    },
    {
      title: 'Assistant de laboratoire - Pranasens',
      date: '2021',
      description:
        'Travail très diversifié. Travaux agricoles (tracteur/ désherbage) et travaux de laboratoire comprenant la préparation des produits ainsi que leur emballage. ' +
        'Un petit peu de travaux administratifs aussi (organisation). ',
      list: ['Opérations agricoles', 'Préparation et embouteillages des produits du laboratoire'],
      iconTitle: 'Pransens',
      iconPath: '../assets/icons/pranasens.png',
      link: 'https://pranasens.com/',
    },
  ];
}
  