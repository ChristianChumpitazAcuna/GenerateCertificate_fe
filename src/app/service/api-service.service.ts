import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  http = inject(HttpClient);

  private URL = 'http://localhost:8080/GenerateCertificate';

  getData() {
    return this.http.get(this.URL);
  }
}
