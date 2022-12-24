import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { SearchService } from '../services/search.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  inputForm!: FormGroup;

  dropdown = false;
  notFound = false;
  topSearch = true;
  category = true;
  searchList = false;

  categories: any;
  searches: any;
  lists: any;
  value: any = '';




  image = [
    'assets/images/Business.png',
    'assets/images/Design.png',
    'assets/images/Health & Fitness.png',
    'assets/images/IT & Software.png',
    'assets/images/Marketing.png',
    'assets/images/Music.png',
    'assets/images/Photography.png',
    'assets/images/Teaching.png',
    'assets/images/Testing.png',
    'assets/images/Web Development.png',
  ]
  

  constructor(
    private service: HomeService,
    private searchService: SearchService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.inputForm = this.fb.group({
      search: ['']
    })

    this.service.getCategory().subscribe(data => {
      this.categories = data;
      // console.log(this.categories);
    })

    this.searchService.topSearch().subscribe(data => {
      this.searches = JSON.parse(data);
      // console.log(this.searches); 
    })

    for (var i = 0; i < this.categories.size(); i++) {
      console.log(this.image.contains(this.categories.get(i)));
      
    }

  }



  onClick() {
    if (this.dropdown == false) {
      this.dropdown = true;
    }
  }
  close() {
    if (this.dropdown == true) {
      this.dropdown = false;
      this.topSearch = true;
      this.category = true;
      this.searchList = false;
    }
  }
  appendValue(element: any) {
    this.value = element
  }

  onEnter(event: any) {
    if (event.keyCode == 13) {
      this.bySearch();
    }
  }

  bySearch() {

    for (var i = 0; i < this.categories.length; i++) {
      if (this.inputForm.value.search == this.categories[i]) {

        const body = {
          'text': this.inputForm.value.search
        }

        this.searchService.byCategory(body).subscribe({

          next: (data) => {
            this.lists = data;
            console.log(this.lists);
          },
          error: (e) => {
            alert(e.message)
          },
          complete: () => {
            this.topSearch = false;
            this.category = false;
            this.searchList = true;
            this.notFound = false;
          }
        })
      } else {
        this.topSearch = false;
        this.searchList = false;
        this.category = true;
        this.notFound = true;
      }
    }

    // const body = {
    //   'text': this.inputForm.value.search
    // }

    // this.searchService.searchCourse(body).subscribe(data => {
    //   console.log(data);

    // })

  }

  clickOnCategory(category: any) {

    const body = {
      'text': category
    }

    this.searchService.byCategory(body).subscribe({

      next: (data) => {
        this.lists = data;
        console.log(this.lists);
      },
      error: (e) => {
        alert(e.message)
      },
      complete: () => {
        this.topSearch = false;
        this.category = false;
        this.searchList = true;
        this.notFound = false;
      }
    })
    // } else {
    //   this.topSearch = false;
    //   this.searchList = false;
    //   this.category = true;
    //   this.notFound = true;
    // }
  }


  logOut() {
    this.dialog.open(LogoutComponent, { panelClass: 'custom-dialog-container' });
  }


}
