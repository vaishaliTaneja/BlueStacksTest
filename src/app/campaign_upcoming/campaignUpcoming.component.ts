import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-upcoming',
  templateUrl: './campaignUpcoming.component.html'
})
export class CampaignUpcomingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Hi');
  }

}
