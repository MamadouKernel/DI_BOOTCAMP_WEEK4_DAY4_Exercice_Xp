import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent {
  form!: FormGroup;
  favoriteColor!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        favoriteColor: ['', Validators.required]
    });
}

submit() {
  console.log(this.form.value);
  this.favoriteColor = this.form.get('favoriteColor').value;
}

}
