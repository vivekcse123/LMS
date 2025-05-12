import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  quiz = {
    question: '',
    options: {
      A: '',
      B: '',
      C: '',
      D: ''
    },
    correctAnswer: '',
    explanation: ''
  };

}
