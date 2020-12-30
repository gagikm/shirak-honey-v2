import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primary-navbar',
  templateUrl: './primary-navbar.component.html',
  styleUrls: ['./primary-navbar.component.css']
})
export class PrimaryNavbarComponent implements OnInit {

	title = 'Shirak Honey';
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  public openCart() {
    document.getElementById("cart").click();
  }

  public toggleMenuIfMobile() {
    if (window.innerWidth <= 767) {
      this.isCollapsed = !this.isCollapsed;
    }
  }

}
