import { Component, OnInit } from '@angular/core';
import { QuizzData } from 'src/app/data/quizz.data';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quizzes?: QuizzData[] = [];

  constructor(private quizzService: QuizzService) { }

  ngOnInit(): void {
    this.quizzes = this.quizzService.getAll();
  }
}
