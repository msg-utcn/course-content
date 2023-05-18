import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Register} from "../../data-models/authenticate.model";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'course-project-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  public register(register: Register): void {
    this.authService.register(register).subscribe();
  }
}
