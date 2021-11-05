import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppConstants } from 'src/constants/app.constants';
import { ApiService } from '../services/api/api.service';
import { CustomerRideModel } from '../models/customer-ride.model';

@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.page.html',
  styleUrls: ['./ui-page.page.scss'],
})
export class UiPagePage implements OnInit, OnDestroy {
  logoTitle: string = AppConstants.CONSTANTS.PAGES.UI_PAGE.LOGO_TITLE;
  pendingRidesTitle: string =
    AppConstants.CONSTANTS.PAGES.UI_PAGE.PENDING_RIDES;
  data: CustomerRideModel[] = [];

  apiServiceSubscription: Subscription;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiServiceSubscription = this.apiService
      .getData('https://run.mocky.io/v3/2d518b1e-4fb7-4109-8bf6-790896c35ef4')
      .subscribe((data) => (this.data = data));
  }

  ngOnDestroy() {
    this.apiServiceSubscription.unsubscribe();
  }
}
