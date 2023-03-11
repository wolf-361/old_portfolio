import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { env } from '../../env';
import axios, { Axios } from 'axios';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public token: string|undefined;
  public resolved: boolean = false;
  public emailAdress: string = "Bien essayé :)";

  constructor() {
    this.token = undefined;
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }

      return;
    }

    const data = {
      response: this.token
    };

    axios.post(env.backendUrl, data).then((response) => {
      if(response.data.success) {
        this.emailAdress = response.data.email;
        this.resolved = true;
      
      } else {
        this.token = undefined;
        alert("Capcha invalide");
      } 

    }).catch((error) => {

      alert("Une erreur est survenue");
    });
  }
}
