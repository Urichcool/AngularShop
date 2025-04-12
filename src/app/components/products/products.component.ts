import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardImage, MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-products',
  imports: [MatCardModule, MatCardImage, MatButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
