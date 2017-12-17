import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() heroes: Hero[];

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.select.emit(hero);
  }

  @Output() select: EventEmitter<Hero> = new EventEmitter<Hero>();

}
