import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dropdown = false;

  categories: any;
  searches: any;
  lists: any;

  topSearch = true;

  constructor(private service: HomeService, private searchService: SearchService) { }

  ngOnInit(): void {

    this.service.getCategory().subscribe(data => {
      this.categories = data;
      // console.log(this.categories);      
    })

    this.searchService.topSearch().subscribe(data => {
      this.searches = JSON.parse(data);
      // console.log(this.searches); 
    })

  }

  onClick() {
    if (this.dropdown == false) {
      this.dropdown = true;
    } else {
      this.dropdown = false;
    }
  }

  byCategory(search: any) {

    const body = {
      'text': search
    }

    this.searchService.byCategory(body).subscribe({

      next: (data) => {
        this.lists = data;
        console.log(this.lists);
      },
      error:(e) => {
        alert (e.message)
      },
      complete:() =>{
        this.topSearch = false;
      }

    })
  }
}
