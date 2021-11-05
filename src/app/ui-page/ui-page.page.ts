import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/constants/app.constants';


@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.page.html',
  styleUrls: ['./ui-page.page.scss'],
})
export class UiPagePage implements OnInit {
  logoTitle: string = AppConstants.CONSTANTS.PAGES.UI_PAGE.LOGO_TITLE;
  pendingRidesTitle: string = AppConstants.CONSTANTS.PAGES.UI_PAGE.PENDING_RIDES;
  data: any = [
    {
      pickUp: 10,
      dropOff: 22,
      type: 1,
      price: 17.85,
      riders: 2,
      name: 'Ryan',
      imgURL: 'https://randomuser.me/api/portraits/thumb/men/20.jpg',
      instructions: 'Please use the entrance on the right side of the house',
    },

    {
      pickUp: 15,
      dropOff: 30,
      type: 2,
      price: 19.85,
      riders: 1,
      name: 'Max',
      imgURL: 'https://randomuser.me/api/portraits/thumb/women/43.jpg',
      instructions: 'Please use the entrance on the right side of the house',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
