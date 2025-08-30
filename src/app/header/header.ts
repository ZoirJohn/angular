import { Component } from '@angular/core';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatMenuModule,
    MatListModule,
    MatToolbar,
    MatSidenavContainer,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
