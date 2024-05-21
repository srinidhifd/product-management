import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent,CommonModule,SearchComponent] ,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 products:any[]=[

 ]
filteredProduct:any[]=[];
productService=inject(ProductService);
ngOnInit() {
  this.productService.getProducts().subscribe((result)=>{
    console.log("data",result);
    this.products=result as any;
    this.filteredProduct=this.products
  })

}


  onViewProduct($event: string) {
    console.log("$event", $event);
   }

  onSearch(search: string) {
    console.log("Home",search);
    if (search) {
      this.filteredProduct = this.products.filter(x=>x.name.toLowerCase().includes(search.toLowerCase()));
    }else{
      this.filteredProduct=this.products;
    }
  }
}
