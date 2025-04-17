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
    MatMenuModule
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

deleteItem(id:number){
this.productsService.deleteProduct(id).subscribe((data) => console.log(data)
)
}

  openDialog(product? : IProduct): void {
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px"
    dialogConfig.disableClose = true;
    dialogConfig.data = product

    
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig)

    dialogRef.afterClosed().subscribe((data) => {
      if(data && data.id){
        this.updateData(data)
        
      }
      else if(data){
        this.postData(data)
      }
    })
  }

  postData(data:IProduct){
    this.productsService.postProduct(data).subscribe()
  }

updateData(product:IProduct){
  this.productsService.updateProduct(product).subscribe()
}

}
