import { Component } from '@angular/core';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss'],
})
export class FormationsComponent {
  public formations = [
    {
      title: 'Baccalauréat en informatique',
      subtitle: 'Université du Québec à Trois-Rivières',
      date: '2022 - 2025',
      description:
        "Profil: Applications Web et Mobiles.",
      iconTitle: 'UQTR',
      iconPath: '../assets/icons/uqtr.png',
      link: 'https://uqtr.ca/',
    },
    {
      title: 'Baccalauréat en chimie',
      subtitle: 'Université du Québec à Trois-Rivières',
      date: '2020 - 2022',
      description:
        "",
      iconTitle: 'UQTR',
      iconPath: '../assets/icons/uqtr.png',
      link: 'https://uqtr.ca/',
    },
    {
      title: 'Techniques de laboratoire',
      subtitle: 'Université du Québec à Trois-Rivières',
      date: '2017 - 2020',
      description:
        "Profil: Chimie analytique.",
      iconTitle: 'Cégep Shawinigan',
      iconPath: '../assets/icons/cshawinigan.png',
      link: 'https://www.cegepshawinigan.ca/',
    },
  ];
}
