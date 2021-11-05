import { Component, Input, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AppConstants } from 'src/constants/app.constants';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-customer-ride',
  templateUrl: './customer-ride.component.html',
  styleUrls: ['./customer-ride.component.scss'],
})
export class CustomerRideComponent implements OnInit {
  @Input() item: any;
  @Input() idx: number;

  pickUpMins: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.PICK_UP_MINS;
  pickUpTitle: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.PICK_UP_TITLE;
  dropOffMins: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.DROP_OFF_MINS;
  dropOffTitle: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.DROP_OFF_TITLE;
  currencySymbol: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.CURRENCY_SYMBOL;
  riderInstrctionsTitle: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.RIDER_INSTRUCTIONS;
  acceptRideBtnTitle: string =
    AppConstants.CONSTANTS.PAGES.CUSTOMER_RIDE_PAGE.ACCEPT_RIDE;

  constructor(private toastController: ToastController) {}

  ngOnInit() {
    if (this.idx > 0) {
      const ele = document.getElementsByClassName('customer-rider-other-info')[
        this.idx
      ];
      const eleBorder =
        document.getElementsByClassName('customer-ride-info')[this.idx];
      eleBorder.classList.add('borders');
      ele.classList.add('hide');
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2500,
    });
    toast.present();
  }

  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);
  };
}
