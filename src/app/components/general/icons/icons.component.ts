import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent {
  @Input()
  iconPath: string = 'assets/icons/';

  @Input()
  url: string = '';

  @Input()
  title: string = 'Icône';
}
