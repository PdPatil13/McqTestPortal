import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrl: './exam-result.component.css'
})
export class ExamResultComponent implements OnInit {
  email!: string;
  questions: any[] = [];
  selectedAnswers: { [key: number]: string } = {};
  results: { question: string, correctAnswer: string, selectedAnswer: string, isCorrect: boolean }[] = [];
  correctCount: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.email = this.getCookie('email');
    if (history.state.questions && history.state.selectedAnswers) {
      this.questions = history.state.questions;
      this.selectedAnswers = history.state.selectedAnswers;
      this.calculateResults();
    } else {
      this.router.navigate(['/']);
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

calculateResults() {
    for (const question of this.questions) {
      const selectedAnswer = this.selectedAnswers[question.QuestionID];
      const isCorrect = selectedAnswer === question.CorrectAnswer;
      if (isCorrect) {
        this.correctCount++;
      }
      this.results.push({
        question: question.QuestionText,
        correctAnswer: question.CorrectAnswer,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect
      });
    }
  }
}
