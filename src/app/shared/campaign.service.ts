import { Injectable } from '@angular/core';
import _ from "lodash";
import { Campaign } from '../model/campaign.model';

@Injectable()
export class CampaignService {

  private campaign: Campaign[] = [
    new Campaign(
      'whatsapp',
      new Date(),
      'live'
    ),
    new Campaign(
      'Mole Slayer',
      new Date(),
      'upcoming'
    ),
    new Campaign(
      'Test Whatsapp',
      new Date(),
      'past'
    )
  ];
  // private recipes: Recipe[] = [];

  constructor() {}

  getCampaign(type) {
    var campaign = [];
    console.log('want', type.split('/')[1]);
    for (let c of this.campaign) {
      if (c.type === type.split('/')[1]) {
        campaign.push(c);
      }
    }
    return campaign;
  }
}
