import {HttpHandler, HttpInterceptor, HttpEvent, HttpResponse, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';

import {registrationFormFieldsResponseExample, registrationRequestExample} from './interfaces/interfaces';
import {Injectable} from '@angular/core';

@Injectable()
export class RegistrationInterceptorService implements HttpInterceptor {

  // @ts-ignore
  intercept(request: HttpRequest, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('request:');
    // console.log(request);
    if (request.method === 'POST') {
      return of(new HttpResponse({status: 200, body: registrationRequestExample}));
    } else if (request.method === 'GET') {
      return of(new HttpResponse({status: 200, body: registrationFormFieldsResponseExample}));
    } else {
      return of(new HttpResponse({status: 400, body: {message: 'Not supported'}}));
    }
  }
}

