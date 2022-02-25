import { Component, OnInit, Input } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare,
  faInstagramSquare,
  faYoutubeSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { Observable } from 'rxjs';
import { CurrentUser } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../auth/login/login.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  facebook = faFacebookSquare;
  insta = faInstagramSquare;
  youtube = faYoutubeSquare;
  twitter = faTwitterSquare;
  user: Observable<CurrentUser> = null;
  
  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.user = this.auth.currentUser;
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
    });
  }
  logout() {
    this.auth.logout();
    this.router.navigate(['/landing']);
  }
}
