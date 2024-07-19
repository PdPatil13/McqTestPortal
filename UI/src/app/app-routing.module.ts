import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeginTestComponent } from './begin-test/begin-test.component';
import { QuestionPageComponent } from './question-page/question-page.component';
import { ExamResultComponent } from './exam-result/exam-result.component';

const routes: Routes = [
  { path: '', component: BeginTestComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'result', component: ExamResultComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
