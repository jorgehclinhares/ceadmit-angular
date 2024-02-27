import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthData } from 'src/app/services/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formAuth: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.formAuth = new FormGroup({
      identifier: new FormControl(
        '',
        Validators.compose([Validators.required])
      ),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  async signIn() {
    try {
      const { identifier, password } = this.formAuth.value;
      const response = await this.authService.auth(identifier, password);
      console.log(response);

      this.setUserData(response.data);
      this.redirectToPageAuthenticated();
    } catch (err) {
      console.log(err);
    }
  }

  private setUserData(data: AuthData) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('permissions', JSON.stringify(data.permissions));
    localStorage.setItem('user', JSON.stringify(data.user));
  }

  private redirectToPageAuthenticated() {
    this.router.navigate(['/dashboard']);
  }
}
