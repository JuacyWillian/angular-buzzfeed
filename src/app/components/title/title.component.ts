import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  quizz = { id: 1, title: "Você é Herói ou Vilão?" };

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
