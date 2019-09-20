import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignLiveComponent } from './campaign_live/campaignLive.component';
import { CampaignPastComponent } from './campaign_past/campaignPast.component';
import {CampaignUpcomingComponent} from './campaign_upcoming/campaignUpcoming.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/past', pathMatch: 'full' },
    { path: 'past', component:  CampaignPastComponent},
    { path: 'live', component: CampaignLiveComponent },
    { path: 'upcoming', component: CampaignUpcomingComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
