import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  sayHello() {
    alert("Hello, welcome to my contact page!");
  }

  onClick() {
    this.sayHello();
  }
}
