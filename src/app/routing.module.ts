import { CreditCardComponent } from './credit-card/credit-card.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =[
    {path:'', component:CreditCardComponent},
    {path:'home', component:HomeComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}