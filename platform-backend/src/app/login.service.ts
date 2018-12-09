import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticateAsync(username: string, password: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // Do Async work

      let headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
        });

      let options = {
        headers: headers
      };

      const url = "http://localhost:3000/login";
      this.http.post(url, { username: username, password: password }, options)
        .toPromise()
        .then((result) => {
          resolve(result);

        }, (err) => {
          reject(err)
        });
    })
  }
}
