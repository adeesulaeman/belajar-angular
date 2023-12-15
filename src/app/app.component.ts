import { Component } from '@angular/core';
import { mobil } from './model/mobil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    // local variable
    const title = 'my-app-test';

    const judulBaru = this.namaTitle();
    this.gantiTitle(judulBaru);

    this.title = "Title Baru";

    this.suzuki.roda = 2;
    this.suzuki.maxPenumpang = 7;
    this.suzuki.sunroof = false;
    this.suzuki.mesin = "Diesel";
    this.suzuki.tipe = "XL7";

    this.namaFunction(9);
  }

  // global variable
  title = "Ini adalah Judul Aplikasi";

  suzuki: mobil = new mobil();
  
  // function void
  gantiTitle(judul: string){
    this.title = judul;
  }

  // function return
  namaTitle(){
    return "Judul Baru";
  }

  namaFunction = (penumpang: number) => {
    this.suzuki.maxPenumpang = penumpang;
  }


}
