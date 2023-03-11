import { Component } from '@angular/core';

// Permet de définir un délai d'attente
function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public sentences = [
    "mon portfolio",
    "mon CV",
    "mes projets",
    "mes compétences",
    "mes expériences",
    "mon contact",
  ];

  constructor() {
    // Permet d'attendre que le DOM soit chargé pour écrire la phrase
    document.addEventListener("DOMContentLoaded", async () => {
      this.writeSentence();
    });
  }

  // Permet d'écrire une phrase caractère par caractère
  private async writeSentence() {

    var currentSentence = 0;
    var insertedLetter = 0;

    // Ecriture de la phrase caractère par caractère
    while(true) {

      let text = document!.getElementById("changing-text");
      if(text == null) return;
      text.innerText = this.sentences[currentSentence].substring(0, insertedLetter);
      insertedLetter++;
      if (insertedLetter > this.sentences[currentSentence].length) {
          await delay(2000);

          // Suppression de la phrase caractère par caractère
          while (insertedLetter >= 0) {
              text.innerText = this.sentences[currentSentence].substring(0, insertedLetter);
              insertedLetter--;
              await delay(100);
          }

          currentSentence++;
          insertedLetter = 0;
          if (currentSentence >= this.sentences.length) {
              currentSentence = 0;
          }

          await delay(1000);
      }
      await delay(100);
    }
  }
}
