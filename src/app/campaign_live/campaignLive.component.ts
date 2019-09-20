import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-campaign-live',
  templateUrl: './campaignLive.component.html'
})
export class CampaignLiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Hi');
  }

}
