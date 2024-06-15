
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { SoupsComponent } from './soups/soups.component';

import { AllComponent } from './all/all.component';
import { ChickenComponent } from './chicken/chicken.component';
import { BeefComponent } from './beef/beef.component';
import { SeafoodComponent } from './seafood/seafood.component';
import { VegetableComponent } from './vegetable/vegetable.component';
import { BitsComponent } from './bits/bits.component';
import { SidesComponent } from './sides/sides.component';
import { SaladsComponent } from './salads/salads.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CartComponent } from './cart/cart.component';
import { ErrorhandlerComponent } from './errorhandler/errorhandler.component';


export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"salads", component:SaladsComponent},
    {path:"soups", component:SoupsComponent},
    {path:"chicken", component:ChickenComponent},
    {path:"beef", component:BeefComponent},
    {path:"seafood", component:SeafoodComponent},
    {path:"vegetable", component:VegetableComponent},
    {path:"bits", component:BitsComponent},
    {path:"sides", component:SidesComponent},
    {path:"all", component:AllComponent},
    {path:"cart", component: CartComponent},
    {path:"**", component: ErrorhandlerComponent}

];
