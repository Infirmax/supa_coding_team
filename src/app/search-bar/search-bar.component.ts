import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'], // Update styleUrls property
})
export class SearchBarComponent {
  items: any[] = [
    { name: 'cs2' },
    { name: 'club penguin' },
    { name: 'pico park' }
    // Other items
  ];
  filteredItems: any[] = [];
  searchTerm: string = '';
  submittedSearchTerm: string = '';

  constructor() {
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
  }
}