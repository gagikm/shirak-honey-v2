import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pure-honey-banner',
  templateUrl: './pure-honey-banner.component.html',
  styleUrls: ['./pure-honey-banner.component.css']
})
export class PureHoneyBannerComponent implements OnInit {
	@Input() variantParam: string;

  constructor() { }

  ngOnInit(): void {
  }

}
