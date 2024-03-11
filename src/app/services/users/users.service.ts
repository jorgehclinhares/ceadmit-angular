import { Injectable } from '@angular/core';
import { AxiosApp } from '../axios';
import { UserListParam, UserListResponse } from './users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private axios: AxiosApp;

  constructor() {
    this.axios = AxiosApp.getInstance();
  }

  list(params: UserListParam): Promise<UserListResponse> {
    return this.axios.axiosInstance.get('/user', { params });
  }
}
