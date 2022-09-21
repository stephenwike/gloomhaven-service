import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonsterAbilityCardsComponent } from './monster-ability-cards/monster-ability-cards.component';
import { MonsterAttackModifierComponent } from './monster-attack-modifier/monster-attack-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterAbilityCardsComponent,
    MonsterAttackModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
