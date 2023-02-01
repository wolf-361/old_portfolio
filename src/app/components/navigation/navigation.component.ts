import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ThemeService } from '../../core/service/theme.service';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  // Liens de navigation
  public links = [
    { name: 'Accueil', route: '/', icon: 'home' },
    { name: 'Compétences', route: '/skills', icon: 'code' },
    { name: 'Projets', route: '/projects', icon: 'view_carousel' },
    { name: 'Formations', route: '/formations', icon: 'school' },
    { name: 'Expériences', route: '/experiences', icon: 'developer_mode' }
  ];

  // Breakpoint pour afficher le menu en mode mobile
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // Injection du service BreakpointObserver
  constructor(private breakpointObserver: BreakpointObserver, private themeService: ThemeService) {
    // Verifier si le theme est dark
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      this.themeService.setDarkTheme(true);
    }
  }
  
  // Dark mode toggle
  isDarkTheme!: Observable<boolean>; // Observable qui permet de voir un changement de thème#

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  setDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }
}
