import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class QuestionsService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllQuestions(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/question-management');
  }
}
