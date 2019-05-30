import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@humanitec/core-data';

@Component({
  selector: 'humanitec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'programs';
  isLoggedIn$: Observable<boolean> = this.authService.isAuthenticated$;
  isLoggedIn;

  links = [
    {path: '/programs', icon: 'work', label: 'Programs'},
    {path: '/activities', icon: 'work', label: 'Activities' }
  ];

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$
      .subscribe(loggedIn => {
        const path = (loggedIn) ? '': 'login';
        this.isLoggedIn = loggedIn;
        this.router.navigate([path])
      })
  }

  logout(){
    this.authService.logout();
  }

  isSidenavOpen(component, authentication) {
    return component.opened && authentication
  }
}
