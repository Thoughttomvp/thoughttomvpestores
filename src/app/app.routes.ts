import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PricingComponent } from './components/pricing/pricing.component';

export const routes: Routes = [
    {
        path: '', component: LandingPageComponent,
    },
];
