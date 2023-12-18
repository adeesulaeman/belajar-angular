import { Injectable } from '@angular/core';
import { ProfileModel } from '../model/profile';
import { HttpClient } from '@angular/common/http';
import { profileList } from '../mock/profile.mock';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileList(){
    // get api
    // return profileList;
    return this.http.get('https://reqres.in/api/users');
  }

  getProfileByNik(_nik: number){
    // return profileList.find(x => x.nik === _nik);
    return this.http.get('https://reqres.in/api/user/?id=' + _nik);
  }



}
