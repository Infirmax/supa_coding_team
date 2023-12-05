import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  userGuess: string = '';

  constructor(private router: Router) { }

  startGame() {
    // Perform any necessary logic before starting the game
    // For example, you can pass the user's guess to the game component
    // using a service or by navigating to the game component with a parameter
    this.router.navigate(['/play', { guess: this.userGuess }]);
  }

  playGame() {
    // Navigate to the game component when the "Play" button is clicked
    this.router.navigate(['/play']);
  }
}
