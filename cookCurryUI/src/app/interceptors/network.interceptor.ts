import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { DataserviceService } from '../services/dataservice.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  constructor(private dataService : DataserviceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.dataService.showSpinner();
    return next.handle(request).pipe(
      finalize(()=>{
        this.dataService.hideSpinner();
      })
    );
  }
}
