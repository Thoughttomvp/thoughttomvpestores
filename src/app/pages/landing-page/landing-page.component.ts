import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { Banner01Component } from '../../components/banner-01/banner-01.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { PricingComponent } from '../../components/pricing/pricing.component';
import { WorkComponent } from '../../components/work/work.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    BannerComponent,
    Banner01Component,
    FeaturesComponent,
    PricingComponent,
    WorkComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
