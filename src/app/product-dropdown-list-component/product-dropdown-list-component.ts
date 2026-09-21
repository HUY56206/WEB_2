import { Component } from '@angular/core';
import { Product } from '../classes/IProduct';

@Component({
  selector: 'app-product-dropdown-list-component',
  standalone: false,
  styleUrl: './product-dropdown-list-component.css',
  templateUrl: './product-dropdown-list-component.html',
})
export class ProductDropdownListComponent {
  products: Product[] = 
    [
      {id: 1, name: 'Iphone 12', price: 2000, image: 'https://didongmoi.vn/wp-content/uploads/2025/07/1625885054_dien-thoai-iphone-12-128gb-cu-trang.jpg'},
      {id: 2, name: 'Iphone 18', price: 0, image: 'https://www.apple.com/vn/newsroom/2026/09/apple-debuts-iphone-18-pro-and-iphone-18-pro-max/'},
      {id: 3, name: 'Iphone Duo', price: 4000, image: 'https://fptshop.com.vn/dien-thoai/iphone-duo'},
      {id: 4, name: 'Macbook Air M4', price: 5000, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajjZ_VGCbp_apOCzf71WmqlvE5b88UjrKC2_2O4MIvQ&s=1000'},
      {id: 5, name: 'Iphone 16', price: 6000, image: 'https://www.google.com/aclk?sa=L&ai=DChsSEwjA0ZvyufeWAxXP8EwCHawRFPMYACICCAEQARoCdG0&co=1&ase=2&gclid=CjwKCAjwn67VBhBnEiwAXUIN1aRT4lRZvWKv62FYq5lJkKLf7pdrl8jy8xmyv-LPLQUFn3K3_VJfBxoCN_AQAvD_BwE&cid=CAASuwHkaKHFzwWYtW13iTXKQNhmFwjedQaMz5ApiU0-qSAB9bJ4pOh8yAd7xFjWv_-z6FojZhW07igk99znHquek_m-Z2JyAiEu3gbS-KXRhlsG7nNSrJwlLdvT7wv56uE7TRo0oeX8pFoOC26ddz5d_46tJw_MQ4sGTbV54f52sMUT4RFJ2c-SU--N-MY5u0XebRsaqOYk6XUuSmCpxvOdMBBOWw2upqSCPUwbvnYzsU-wV6AHIaQ4bX78BN3x&cce=2&category=acrcp_v1_32&sig=AOD64_2jAsbsUm11cd3ghMPupYf7VRdN-g&ctype=5&q=&nis=4&ved=2ahUKEwipvpbyufeWAxUwr1YBHWUFGKEQwg8oAXoECAoQDA&adurl='}
    ]
}
