import {Component, OnInit} from '@angular/core';
import {DigitransitService} from "../services/digitransit.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  private stop: any = {};
  private key: string ='AIzaSyBMRAqbQDzkJxe9QAEA9KRiIEiCnoIZtkY';
  private url: string =`https://www.google.com/maps/embed/v1/place?key=${this.key}&q=Mannerheimintie`;

  constructor(private digitransitService: DigitransitService, private router: Router) {
  }

  setPrefrences = (formValues: any) => {
    // this.digitransitService.setStop(this.stop);
    localStorage.setItem('user', JSON.stringify(formValues));
    this.router.navigate(['routes']);
  };

  ngOnInit() {
  }

}

