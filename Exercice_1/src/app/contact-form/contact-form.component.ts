import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  Name!: string
  Email!: string
  Message!: string


  ngOnInit(): void {
  }

  onSubmitForm() {
    console.log(" mon nom est "+this.Name+" mon email est "+this.Email+" et mon message est le suivant "+this.Message);
    this.Name=''
    this.Email=''
    this.Message=''
  }
}
