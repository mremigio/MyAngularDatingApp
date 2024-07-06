import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  exportAs: 'ngForm'
})
export class NavComponent implements OnInit {
  model: any = {};
  loggedIn = false;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.accountService.currentUser$.subscribe({
      next: user => {
        //this.loggedIn = !!user
        this.loggedIn = false;
        if (user) {
          this.loggedIn = true;
        }
      },
      error: error => console.log(error)
      })
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountService.logout();
    this.loggedIn = false;
  }
}
