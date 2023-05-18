import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Authenticate, Register} from "../data-models/authenticate.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public login(authenticate: Authenticate): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/auth/login', authenticate);
  }

  public register(register: Register): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/auth/register', register);
  }
}
