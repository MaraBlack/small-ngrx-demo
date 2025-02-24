import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private routing: Router) {}

  onStart(){
    this.routing.navigate(['config/cpu'])
  }
}
