import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-past',
  templateUrl: './campaignPast.component.html'
})
export class CampaignPastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Hi');
  }

}
