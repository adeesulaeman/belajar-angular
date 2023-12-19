import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileModel } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private pService: ProfileService,
    private route: ActivatedRoute,
    private router: Router
    ){
      this.route.params.subscribe((x: any) => {
        this.NIKKaryawan = x.id;
      });
    }

  karyawan: ProfileModel[] = [];
  NIKKaryawan: any;
  karwayanTerpilih: ProfileModel = new ProfileModel();

  ngOnInit(): void {
    console.log('satu');
    console.log('dua');

    this.pService.getProfileList()
    .subscribe((x: any) => {
      console.log('tiga');
      this.karyawan = x.data;
    });

    console.log('empat');

    if(this.NIKKaryawan){
      this.pService.getProfileByNik(Number(this.NIKKaryawan))
      .subscribe(x => {
        console.log(x);
        // this.karwayanTerpilih = x;
      });
    }
  }

  onlogin(){
    // alert('login oke')
    // panggil service, cek apakah username dan password sesuai atau tidak
    // jika sesuai, pindah url ke profile
    this.router.navigateByUrl('/dasboard');
  }

  tambahData(){
    this.karyawan.push({id: 100, email: 'dsadsa', first_name: 'ade', last_name: 'oke', avatar: ''});
  }

}
