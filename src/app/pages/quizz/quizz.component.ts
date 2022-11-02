import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { QuizzData } from 'src/app/data/quizz.data';
import { QuizzService } from 'src/app/services/quizz.service';


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})

export class QuizzComponent implements OnInit {
  id?: number;
  quizz?: QuizzData;
  currentQuestion: number = 1;
  choices: string[] = [];
  showResults: boolean = false;
  resultado?: string;


  constructor(private route: ActivatedRoute,
    private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.id = +params['id'])
    this.getQuizz(this.id!);
  }

  getQuizz(id: number) {
    this.quizz = this.quizzService.getQuizzById(id);
  }

  onClickChoice(option: string) {
    this.choices.push(option)
    this.currentQuestion++;
    if (this.choices.length == this.quizz?.questions.length) {
      this.showResults = true;
      this.calcularResultado();
    }
  }

  calcularResultado() {
    let choice1: number = 0
    let choice2: number = 0;
    this.choices.forEach((c) => {
      if (c == 'A') { choice1++; }
      else { choice2++ }
    })
    if (choice1 > choice2) {
      this.resultado = this.quizz?.results.A;
    } else {
      this.resultado = this.quizz?.results.B;
    }
  }
}
