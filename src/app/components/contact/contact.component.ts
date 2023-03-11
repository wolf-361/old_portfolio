import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from 'src/app/core/service/theme.service';
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
  isDarkTheme!: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.token = undefined;
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
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
