import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ApiService } from '../Service/service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.css'
})
export class QuestionPageComponent implements OnInit {
  questions: any[] = [];
  selectedAnswers: { [key: number]: string } = {};
  email!: string;
  allQuestionsAttempted: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.email = this.getCookie('email');
    if (!this.email) {
      this.router.navigate(['/']);
    } else {
      this.apiService.getQuestions().subscribe(data => {
        this.questions = data;
      });
    }
  }

  getCookie(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift() || '';
    }
    return '';
  }

  selectAnswer(questionId: number, answer: string) {
    this.selectedAnswers[questionId] = answer;
  }

  allQuestionsAnswered():boolean {
    return this.questions.every(question => this.selectedAnswers[question.QuestionID] !== undefined);
  }

  submitAnswers() {
    for (const questionId in this.selectedAnswers) {
      if (this.selectedAnswers.hasOwnProperty(questionId)) {
        const answer = this.selectedAnswers[questionId];
        this.apiService.saveAnswer({
          email: this.email,
          questionId: parseInt(questionId, 10),
          answer: answer
        }).subscribe();
      }
    }
    this.router.navigate(['/result'], {
      state: { questions: this.questions, selectedAnswers: this.selectedAnswers }
    });
  }
}

