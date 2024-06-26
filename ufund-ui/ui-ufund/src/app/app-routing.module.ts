import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NeedsComponent } from './needs/needs.component';
import { NeedDetailComponent } from './need-detail/need-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HistoryComponent } from './history/history.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: UserLoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: NeedDetailComponent },
  { path: 'needs', component: NeedsComponent },
  {path: 'history', component: HistoryComponent},
  {path: 'feedback', component: FeedbackComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}