import { Injectable } from '@angular/core';

import { QuizzData } from '../data/quizz.data';
import allQuizzes from '../../assets/data/quizz_questions.json'


@Injectable({
  providedIn: 'root'
})

export class QuizzService {
  constructor() { }

  getAll(): QuizzData[] {
    return allQuizzes;
  }

  getQuizzById(id: number): QuizzData {
    return allQuizzes.filter(q => q.id == id)[0];
  }
}
