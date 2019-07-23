import { Component } from '@angular/core';
import { NavigationLinks } from './navigation-links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'travelService';
  SubHeading='Chennai';

links:NavigationLinks[]=[
        {text:'Home',links:'home.html'},
        {text:'Catalog',links:'cat.html'},
        {text:'Payment',links:'pmt.html'},
        {text:'Contact',links:'contact.html'}];
}
