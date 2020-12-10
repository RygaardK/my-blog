import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecentpostComponent } from './recentpost/recentpost.component';
import { AllpostComponent } from './allpost/allpost.component';
import { FivepostComponent } from './fivepost/fivepost.component';
import { CreatepostComponent } from './createpost/createpost.component';

const routes: Routes = [
  { path: 'recent', component: RecentpostComponent },
  { path: 'fiveposts', component: FivepostComponent },
  { path: 'allposts', component: AllpostComponent },
  { path: 'createpost', component: CreatepostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
