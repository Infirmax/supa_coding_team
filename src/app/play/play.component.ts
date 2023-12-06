import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../data/service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrl: './play.component.css'
})

export class playComponent {
  name: String = "";
  review: String = "";


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
    this.review = data.reviews[5].review;
    this.dataService.sharedData = this.name;
    //U guys can check the console to find review, it's for our testing purpose, should be fine tho
    console.log(data.reviews);
    console.log(this.review)
    console.log(this.name)
  }

  ngOnInit(): void {
  }

}
