import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { env } from '../environments/environment';

export class AxiosApp {
  private static instance: AxiosApp | null = null;
  private _axiosInstance: AxiosInstance;

  private constructor() {
    this._axiosInstance = axios.create({
      baseURL: env.baseURL,
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    this._axiosInstance.interceptors.request.use(
      (config) => {
        if (localStorage.getItem('token')) {
          config.headers.Authorization =
            'Bearer ' + localStorage.getItem('token');
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this._axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  static getInstance(): AxiosApp {
    if (!AxiosApp.instance) {
      AxiosApp.instance = new AxiosApp();
    }

    return AxiosApp.instance;
  }

  get axiosInstance(): AxiosInstance {
    return this._axiosInstance;
  }
}
