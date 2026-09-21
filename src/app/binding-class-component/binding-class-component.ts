import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-class-component',
  standalone: false,
  styleUrl: './binding-class-component.css',
  templateUrl: './binding-class-component.html',
})
export class BindingClassComponent {
  isActive: boolean = true;
  isSaved: boolean = false;
  toggleSaveState() {
    this.isSaved = !this.isSaved;
  }
}
