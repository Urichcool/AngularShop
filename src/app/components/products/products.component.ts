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
import { MatMenuModule } from '@angular/material/menu';
import { SharedDataService } from '../../services/shared-data.service';

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
    MatMenuModule,
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
  sharedDataService = inject(SharedDataService);
  isNewProduct: boolean = true;
  basket:IProduct[] = [];

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });


  }

  addToBasket(product: IProduct) {
    product.quantity = 1;
    this.productsService.postProductToBasket(product).subscribe();
    this.reloadPage();
  }

  deleteItem(id: string) {
    this.productsService
      .deleteProduct(id)
      .subscribe((data) => console.log(data));
    this.reloadPage();
  }

  openDialog(product?: IProduct): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.data = product;

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      this.sharedDataService.currentData$.subscribe((data) => {
        this.isNewProduct = data;
      });

      if (data) {
        if (this.isNewProduct) {
          this.postData(data);
        } else {
          this.updateData(data);
        }
        this.reloadPage();
      }
    });
  }

  reloadPage() {
    window.location.reload();
  }

  postData(data: IProduct) {
    this.productsService.postProduct(data).subscribe();
  }

  updateData(product: IProduct) {
    this.productsService.updateProduct(product).subscribe();
  }
}
