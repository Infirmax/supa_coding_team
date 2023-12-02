import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent {
  name: String = "";
  review: String ="";
  
  constructor() { 
    this.loadGame();
  }

  async loadGame() {
    // Load game name
    const response = await fetch('http://localhost:3000/steamgame');
    const data = await response.json();
    this.name = data.name;
    this.review = data.reviews[5].review;
    //U guys can check the console to find review, it's for our testing purpose, should be fine tho
    console.log(data.reviews);
    console.log(this.review)
  }

  ngOnInit(): void {
  }
}
