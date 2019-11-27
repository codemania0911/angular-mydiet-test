import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ResultComponent } from './result/result.component';
import { ShowDietComponent } from './show-diet/show-diet.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch:'full'},
  { path: 'index', component: IndexComponent },
  { path: 'result', component: ResultComponent },
  { path: 'showdiet', component: ShowDietComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  IndexComponent,
  ResultComponent,
  ShowDietComponent
]
