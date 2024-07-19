import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  // Fetch all questions
  getQuestions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/questions`);
  }

  // Save user answers
  saveAnswer(data: { email: string, questionId: number, answer: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/saveAnswer`, data);
  }
}
