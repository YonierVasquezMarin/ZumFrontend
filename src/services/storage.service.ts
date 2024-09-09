import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

   saveToken(token: string) {
    sessionStorage.setItem('token', token);
   }

    getToken() {
      return sessionStorage.getItem('token');
    }

    removeToken() {
      sessionStorage.removeItem('token');
    }

    saveUser(user: any) {
      sessionStorage.setItem('user', JSON.stringify(user));
    }

    getUser() {
      return JSON.parse(sessionStorage.getItem('user')!);
    }
    
    saveItem(key: string, value: any) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }

    getItem(key: string) {
      return JSON.parse(sessionStorage.getItem(key)!);
    }

    removeItem(key: string) {
      sessionStorage.removeItem(key);
    }

    clear() {
      sessionStorage.clear();
    }
}
