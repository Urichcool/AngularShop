import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardImage, MatCardModule } from '@angular/material/card';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../interfaces/products.interface';
import { CurrencyPipe, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-products',
  imports: [
    MatCardModule,
    MatCardImage,
    MatButtonModule,
    CurrencyPipe,
    RouterLink,
    MatToolbarModule,
    NgIf,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  canEdit: boolean = true;
  canView: boolean = false;
  products!: IProduct[];
  productsService = inject(ProductsService);
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });

   
  }
  openDialog(): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px"
    
    const dialogRef = this.dialog.open(DialogBoxComponent)
  }
}
