import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-box',
  imports: [MatDialogModule, MatInputModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
})
export class DialogBoxComponent implements OnInit {
myForm: FormGroup = new FormGroup({
title:new FormControl(''),
price:new FormControl(''),
year:new FormControl(''),
chip:new FormControl(''),
ssd:new FormControl(''),
memory:new FormControl(''),
display:new FormControl(''),
})

// export interface IProduct {
//   id: number;
//   title: string;
//   price: number;
//   image?: string;
//   year: number;
//   configure: IProductsConfig;
// }

// export interface IProductsConfig{
//     chip: string;
//     SSD: string;
//     memory: string;
//     display: string;
// }


  readonly dialogRef = inject(MatDialogRef<DialogBoxComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit():void{
console.log(this.data)
  }

  ngOnInit(): void {}
}
