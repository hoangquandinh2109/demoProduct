import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public listProducts: Array<Product> = [];
  public newProduct: Product = new Product();
  public editMode: boolean = false;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.load();
  }

  public load(){
    this.productService.getListProduct().subscribe((resp: Array<Product>) => {
      this.listProducts = resp || [];
    });
  }

  private create(){
    this.productService.createProduct(this.newProduct).subscribe((resp: any) => {
      this.load();
      this.newProduct = new Product();
    });
  }
  public detail(pro: Product){
    this.editMode = true;
    this.productService.getListProductById(pro.id).subscribe((resp: Array<Product>) => {
      this.newProduct = resp[0];
    });
  }
  private edit(){
    this.productService.updateProduct(this.newProduct).subscribe((resp: any) => {
      this.load();
      this.newProduct = new Product();
      this.editMode = false;
    });
  }
  public delete(pro: Product){
    this.productService.deleteProduct(pro.id).subscribe((resp: string) => {
      this.load();
    });
  }

  public buttonClick(btnName: string){
    switch(btnName){
      case 'create':
        this.create();
        break;
      case 'edit':
        this.edit();
        break;
    }
  }
}
