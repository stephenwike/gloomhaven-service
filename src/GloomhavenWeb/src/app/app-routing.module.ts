import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterAttackModifierComponent } from './monster-attack-modifier/monster-attack-modifier.component';


const routes: Routes = [
  { path: "", component: MonsterAttackModifierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
