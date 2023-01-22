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

  public currentRoute: string;  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.currentRoute = document.location.pathname;

    if(this.currentRoute === '/' || this.currentRoute === '') {
      this.currentRoute = 'home';
      
    } else {
      this.currentRoute = this.currentRoute.replace('/', '');
    }
  }

  setCurrentRoute(route: string): void {
    this.currentRoute = route;
  }
  
}
