import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private pagesService: PagesService) {}

  ngOnInit(): void {}

  logout() {
    window.localStorage.clear();
    this.router.navigate(['./login']);
    this.pagesService.openSuccessSnackBar('Sucesso ao realizar logout!');
  }
}
