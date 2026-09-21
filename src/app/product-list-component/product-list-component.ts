import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-list-component',
  standalone: false,
  styleUrl: './product-list-component.css',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  products: Product[] = 
  [
    {id: 1, name: 'Iphone 12', price: 2000, image: 'https://didongmoi.vn/wp-content/uploads/2025/07/1625885054_dien-thoai-iphone-12-128gb-cu-trang.jpg'},
    {id: 2, name: 'Iphone 18', price: 0, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSny6-xR1EKaspxb6jQrD98D6jcNX1eB7o6ulnDEDC74g&s=1000'},
    {id: 3, name: 'Iphone Duo', price: 4000, image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcThpiUqE5_JsblOnkLE15PoUXGxf4RzWbOSYjbRutQXWjp56ug20l8EYy6AF4vifFpgbw_9sPDQaruW_XRbGVzSFFDZZmN61xaG5BV1hj5C&usqp=CAc'},
    {id: 4, name: 'Macbook Air M4', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajjZ_VGCbp_apOCzf71WmqlvE5b88UjrKC2_2O4MIvQ&s=1000'},
    {id: 5, name: 'Iphone 16', price: 6000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4aUjs9_xh63MB_kDXmlqhYnhyDdbxSepUrashm6rJTg&s=1000'}
  ]
}
