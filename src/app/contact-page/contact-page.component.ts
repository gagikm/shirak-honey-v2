import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})

export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (window['FB']) {
      window['FB'].XFBML.parse(document.getElementById('contact-page'));
    }
  }

  reloadPage(): void {
    if (window) {
  	 window.location.href = '/contact';
    }
  }
}

