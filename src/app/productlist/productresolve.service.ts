import { Injectable } from '@angular/core';

import { MyServiceService } from '../my-service.service';


import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class ProductresolveService implements Resolve<any> {
  constructor(private apiService: MyServiceService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.apiService.getProduct();
  }
}