import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private url = 'http://localhost:3000';
  constructor() { }

  getUrl() {
    return this.url;
  }
}
