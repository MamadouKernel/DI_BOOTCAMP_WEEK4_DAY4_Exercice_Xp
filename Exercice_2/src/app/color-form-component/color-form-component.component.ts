import { Component } from '@angular/core';

@Component({
  selector: 'app-color-form-component',
  templateUrl: './color-form-component.component.html',
  styleUrls: ['./color-form-component.component.css']
})
export class ColorFormComponent {
  favoriteColor!: string;
  displayColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }
}
