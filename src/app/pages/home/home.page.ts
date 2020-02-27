import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import {AuthUser} from '../../interfaces/interfaces';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  titulo: string;
  authUser: AuthUser;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.titulo = 'Sat Service v2.0';
  }

}
