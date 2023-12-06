import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data/service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {

  items: any[] = [
    { name: 'Sakura Dungeon' },
    { name: 'Counter Strike 2' },
    { name: 'Dota 2' },
    { name: 'PUBG' },
    { name: 'Lethal Company' },
    { name: 'Team Fortress 2' },
    { name: 'Oxygen Not Included' },
    { name: 'MapleStory' },
    { name: 'Sakura Clicker' }
    // Other items
  ];
  filteredItems: any[] = [];
  searchTerm: string = '';
  submittedSearchTerm: string = '';
  guessedCorrectly = false;

  constructor(private router: Router, public dataService: DataService) {
    this.filteredItems = this.items; // Initially set filteredItems to all items
  }

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onItemClick(item: any) {
    console.log('Selected Item:', item);
    this.searchTerm = item.name;
    this.filteredItems = [];
  }

  submitSearch() {
    this.submittedSearchTerm = this.searchTerm;
    console.log('Search:', this.submittedSearchTerm);
    if (this.submittedSearchTerm === this.dataService.sharedData) {
      this.guessedCorrectly = true;
      console.log(this.guessedCorrectly)
    }
  }

  isPlayPage() {
    return this.router.url === '/play';
  }
}
