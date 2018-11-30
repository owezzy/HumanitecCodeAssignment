import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {
  pageTitle = 'Humanitec Programs';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private router: Router,
              private authService: AuthService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'owen1',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/owen1.svg')
    );
  }


  ngOnInit() {
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }
}
