import { Injectable } from '@angular/core';
import { AxiosApp } from '../axios';
import { AuthResponse } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private axios: AxiosApp;

  constructor() {
    this.axios = AxiosApp.getInstance();
  }

  auth(identifier: string, password: string): Promise<AuthResponse> {
    return this.axios.axiosInstance.post('/auth', { identifier, password });
  }
}
