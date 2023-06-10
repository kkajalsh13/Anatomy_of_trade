import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradingComponent } from './trading/trading.component';

const routes: Routes = [
  {path:'',component:TradingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
