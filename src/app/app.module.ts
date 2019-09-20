import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CampaignPastComponent } from './campaign_past/campaignPast.component';
import {CampaignUpcomingComponent} from './campaign_upcoming/campaignUpcoming.component';
import { CampaignLiveComponent } from './campaign_live/campaignLive.component';
import { CampaignListComponent } from './campaigns/campaign-list/campaign-list.component';
import { CampaignItemComponent } from './campaigns/campaign-list/campaign-item/campaign-item.component';
import { AppRoutingModule } from './app-routing.module';
import {CampaignService} from './shared/campaign.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CampaignListComponent,
    CampaignItemComponent,
    CampaignPastComponent,
    CampaignLiveComponent,
    CampaignUpcomingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule {}
