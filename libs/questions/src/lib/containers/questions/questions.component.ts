import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../services/questions.service";
import {Observable} from "rxjs";
import {QuestionModel} from "@course-project/data-models";

@Component({
  selector: 'course-project-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions$: Observable<QuestionModel[]> | undefined
  displayedColumns: string[] = ['topic', 'title', 'content', 'creationDate'];

  constructor(private questionService: QuestionsService) {}

  public ngOnInit(): void {
    this.questions$ = this.getAllQuestions();
  }

  public getAllQuestions(): Observable<QuestionModel[]> {
    return this.questionService.getAllQuestions();
  }
}
