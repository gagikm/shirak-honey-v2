import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() variantParam: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  onClick(): void {
    const wrapperElement = document.getElementById('wrapper');
    window.scrollTo({top: wrapperElement.clientHeight, behavior:'smooth'})
  }

}
