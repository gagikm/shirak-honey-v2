import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
	public variantParam: string;

  constructor(config: NgbCarouselConfig, private route: ActivatedRoute) {
  	config.interval = 10000;
  }

  ngOnInit() {
  	this.variantParam = this.route.snapshot.queryParamMap.get('hv');
  }

}
