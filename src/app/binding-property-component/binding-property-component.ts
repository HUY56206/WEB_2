import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string="Huynhphuchuy"
  public email:string="huynhphuchuy@gmail.com"
  public nameId:string="nameId"
  public emailId:string="emailId"
  public isDisabled:boolean=true
  public hello:string="Hello các bạn!!!"
}
