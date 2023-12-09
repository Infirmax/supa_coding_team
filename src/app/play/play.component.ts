import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data/service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})

export class PlayComponent {
  name: String = "balls";
  reviews: any = [];
  pictures: any = [];

  constructor(
    private dataService: DataService
  ) {
    this.loadGame();
  }

  async loadGame() {
    // Load game name
    const response = await fetch('http://localhost:3000/steamgame');
    const data = await response.json();
    this.name = data.name;
    this.reviews = data.reviews;
    this.pictures = data.pictures;

    this.dataService.sharedData = this.name;
  }

  ngOnInit(): void {
  }

}
