import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'leave-calendar', pathMatch: "full"},
  {path: 'leave-calendar', component: CalendarPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
