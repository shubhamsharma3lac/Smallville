import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public authForm: FormGroup;
  public formControls = {};

  public loading: boolean = false;

  constructor(private loginService: LoginService, private router: Router) {
    let validators = [];
    validators.push(Validators.required);
    validators.push(Validators.minLength(4));

    this.formControls['username'] = new FormControl('', validators);
    this.formControls['password'] = new FormControl('', validators);

    this.authForm = new FormGroup(this.formControls);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;

    let username = this.authForm.value['username'];
    let password = this.authForm.value['password'];
    this.loginService.authenticateAsync(username, password)
      .then((result) => {
        this.loading = false;
        let user = User.createFromResult(result);
        this.router.navigate(['profile']);

        localStorage.setItem('admin', JSON.stringify(user));
        
      }, (err) => {
        this.loading = false;
      })
  }

}
