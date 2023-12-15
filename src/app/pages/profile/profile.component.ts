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
    this.karyawan = this.pService.profileList;

    if(this.NIKKaryawan){
      this.karwayanTerpilih = this.pService.getProfileByNik(Number(this.NIKKaryawan)) || new ProfileModel();
    }
  }

  onlogin(){
    // alert('login oke')
    // panggil service, cek apakah username dan password sesuai atau tidak
    // jika sesuai, pindah url ke profile
    this.router.navigateByUrl('/dasboard');
  }

}
