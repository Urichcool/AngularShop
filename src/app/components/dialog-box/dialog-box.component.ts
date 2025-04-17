import { Component, inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-box',
  imports: [
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
})
export class DialogBoxComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<DialogBoxComponent>);
  data = inject<any>(MAT_DIALOG_DATA);
  myForm: FormGroup = new FormGroup({
    id: new FormControl(this.data?.id ?? null),
    title: new FormControl(this.data?.title ?? ""),
    price: new FormControl(this.data?.price ?? ""),
    year: new FormControl(this.data?.year ?? ""),
    chip: new FormControl(this.data?.configure.chip ?? ""),
    ssd: new FormControl(this.data?.configure.ssd ?? ""),
    memory: new FormControl(this.data?.configure.memory ?? ""),
    display: new FormControl(this.data?.configure.display ?? ""),
    image: new FormControl("/assets/images/mcbook.jpg")
  });

  isNew:boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit(): void {
    this.data = {
      id:this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      year: this.myForm.value.year,
      image: this.myForm.value.image,
      configure: {
        chip: this.myForm.value.chip,
        SSD: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      },
    };
    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {
    if(this.data) this.isNew = false
  }
}
