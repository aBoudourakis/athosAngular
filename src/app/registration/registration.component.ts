import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

// import cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('formContent') registerFormData: NgForm | undefined;

  public formElements: [{
    type: string;
    name: string;
    label: string;
    required: true;
    validations: [
      {
        name: string;
        message: string;
        value: string;
      },
    ];
  }] | undefined;

  showPassword = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchRegistrationForm();
  }

  private fetchRegistrationForm = () => {
    console.log('fetch form data');
    this.http.get('registrationFormData').subscribe(res => {
      console.log(res);
      console.log(this.formElements);
      this.formElements = JSON.parse(JSON.stringify(res));
      console.log(this.formElements);
      console.log('done');
    });
  }

  /**
   * Submit the registration form data
   *
   * @param formContent - The data passed from the form inputs on submit
   */
  // tslint:disable-next-line:typedef
  onSubmit(formContent: NgForm) {
    console.log('form submited');
    console.log(this.registerFormData);
    this.http.post('registrationPostRequest', null).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/welcome');
    });
  }
}
