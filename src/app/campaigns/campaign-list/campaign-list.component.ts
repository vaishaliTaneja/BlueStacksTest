import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Campaign} from '../../model/campaign.model';
import { CampaignService } from '../../shared/campaign.service';

@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html'
})
export class CampaignListComponent implements OnInit, OnDestroy {
  campaign: Campaign[];
  subscription: Subscription;

  constructor(private campaignService: CampaignService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.router.url);
    this.campaign = this.campaignService.getCampaign(this.router.url);
  }
  ngOnDestroy() {
    this.campaign =[];
    console.log('Hi');
  }
}
