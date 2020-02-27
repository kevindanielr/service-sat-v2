import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    loaderToShow: any;
    constructor(
        public loadingController: LoadingController
    ) { }


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        /*const token = 'my-token-string-from-server';
        // Authentication by setting header with token value
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }*/

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        this.showLoader();

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // console.log('event--->>>', event);
                }
                // this.hideLoader();
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.error(error);
                // this.hideLoader();
                return throwError(error);
            }));
    }

    async showLoader() {
        this.loaderToShow = await this.loadingController.create({
            message: 'Procesando petición',
            duration: 500
        });
        await this.loaderToShow.present();

        const { role, data } = await this.loaderToShow.onDidDismiss();
    }

    hideLoader() {
        this.loaderToShow.dismiss();
    }


}
