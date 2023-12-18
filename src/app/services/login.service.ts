import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  listUser = [{
    username: 'ade',
    password: '123'
  }];

  login(username: string, password: string){
    const cekUser = this.listUser.find(x => x.username === username && x.password === password);
    if(cekUser){
      return true;
    } else {
      return false;
    }
  }
}
