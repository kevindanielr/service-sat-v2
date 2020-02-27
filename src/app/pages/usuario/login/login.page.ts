import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {StorageService} from '../../../services/storage.service';
import {AuthConstants} from '../../../config/auth-constants';
import {ToastService} from '../../../services/toast.service';
import {HttpClient} from '@angular/common/http';
import {MenuController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  titulo: string;

  usuario = {
    correo: '',
    clave: ''
  };

  constructor(private router: Router,
              private authService: AuthService,
              private toastService: ToastService,
              private http: HttpClient,
              private menu: MenuController,
              private navController: NavController,
              private storageService: StorageService) { }

  ngOnInit() {
      this.titulo = 'Sat Service v2.0';
    this.usuario.correo = '';
    this.usuario.clave = '';
  }

  onSubmitTemplate() {
      if (this.validateInputs()) {
          this.authService.login(this.usuario).subscribe(
              (res: any) => {
                  if (res.access_token) {
                      // Storing the User data.
                      this.storageService
                          .store(AuthConstants.AUTH, res)
                          // tslint:disable-next-line:no-shadowed-variable
                          .then(res => {
                              this.navController.navigateRoot('home-private', { animated: true });
                              // this.router.navigate(['home-private']);
                          });
                      // this.menu.enable(true, 'menu');
                  } else {
                      this.toastService.presentToast(res.message, 'danger');
                  }
              },
              (error: any) => {
                  this.toastService.presentToast(error, 'danger');
              }
          );
      } else {
           this.toastService.presentToast('Please enter correo/correo or clave.', 'danger');
      }
  }

  validateInputs() {
    const correo = this.usuario.correo.trim();
    const clave = this.usuario.clave.trim();
    return (
        this.usuario.correo &&
        this.usuario.clave &&
        correo.length > 0 &&
        clave.length > 0
    );
  }

}
