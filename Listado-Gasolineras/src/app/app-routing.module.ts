import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoGasComponent } from './components/listado-gas/listado-gas.component';

const routes: Routes = [
  {path: 'gasolineras', component: ListadoGasComponent},
  {path: '', redirectTo: '/gasolineras', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
