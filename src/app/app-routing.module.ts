import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./componentes/home/home.component";
import {NovoComponent} from "./componentes/novo/novo.component";
import {ProdutoModule} from "./features/produto/produto.module";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'novo', component: NovoComponent},
  {path: 'produto', loadChildren: () => import('./features/produto/produto.module').then(m =>ProdutoModule)} // Lazy Loading
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
