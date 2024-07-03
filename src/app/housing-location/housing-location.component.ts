import { Component ,Input} from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    
    <section class="listing">
      <img  class="listing_photo" [src]="housinglocation.photo" alt="exterior of the {{housinglocation.name}}">
      <h2 class="listing_heading">{{housinglocation.name}}</h2>
      <p class="listing_location">{{housinglocation.city}}, {{housinglocation.state}}</p>
    </section>
   
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housinglocation!: HousingLocation;

}
