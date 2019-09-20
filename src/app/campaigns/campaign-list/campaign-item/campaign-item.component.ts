import { Component, OnInit, Input } from '@angular/core';

import { Campaign } from '../../../model/campaign.model';

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html'
})
export class CampaignItemComponent implements OnInit {
  @Input() campaign: Campaign;
  @Input() index: number;

  ngOnInit() {
  }
}
