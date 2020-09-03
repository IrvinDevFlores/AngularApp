import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor() { }

  adminProductsForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl('', Validators.required)
  });


}
