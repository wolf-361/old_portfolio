import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent {
  public experiences = [
    {
      title: 'Vice-président des affaires académiques - AMI UQTR',
      date: '2022 - 2023',
      description:
        "J'ai été élu vice-président des affaires académiques pour les session d'automne et d'hivers." +
        "J'ai été responsable de supporter la formation académique en proposant des activités éducatives. " +
        "De plus j'ai assuré la représentation de l'AMI sur les comités de programmes du DMI (Département de mathématique et d'informatique).",
      list: null,
      iconTitle: 'AMI',
      iconPath: '../assets/icons/AMI.png',
      link: 'https://ami.uqtr.ca/',
    },
    {
      title: 'Assistant de recherche - mcLab',
      date: '2022',
      description:
        'Participation aux réunions hebdomadaires et aux conférences du groupe. ' +
        'Mes projets principaux étant le site web du groupe et le retravailles des notes de cours.',
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
        'Un petit peu de travaux administratifs aussi (organisation).',
      list: ['Opérations agricoles', 'Préparation et embouteillages des produits du laboratoire'],
      iconTitle: 'Pransens',
      iconPath: '../assets/icons/pranasens.png',
      link: 'https://pranasens.com/',
    },
  ];
}
  