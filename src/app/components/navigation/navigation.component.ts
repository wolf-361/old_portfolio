import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public links = [
    { name: 'Acceuil', route: '/', icon: 'home' },
    { name: 'Compétences', route: '/skills', icon: 'code' },
    { name: 'Projets', route: '/projects', icon: 'view_carousel' },
    { name: 'Formations', route: '/formations', icon: 'school' },
    { name: 'Expériences', route: '/experiences', icon: 'developer_mode' }
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
}
