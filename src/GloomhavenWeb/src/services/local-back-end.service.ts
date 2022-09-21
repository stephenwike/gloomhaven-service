import { Injectable } from '@angular/core';
import { AttackModifierCard } from 'src/models/attack-modifier-card.model';

@Injectable({
  providedIn: 'root'
})
export class LocalBackEndService {

  monsterAttackModifierDeck: string[] = [
    "Null",
    "Minus Two",
    "Minus One", "Minus One", "Minus One", "Minus One", "Minus One", 
    "Plus Zero", "Plus Zero", "Plus Zero", "Plus Zero", "Plus Zero", "Plus Zero", 
    "Plus One", "Plus One", "Plus One", "Plus One", "Plus One", 
    "Plus Two", 
    "Times Two"];

  
  constructor() { }

  GetNextCard(): string
  {
    return this.monsterAttackModifierDeck.pop();
  }

  ShuffleDeck(): void {
    for (let i = this.monsterAttackModifierDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.monsterAttackModifierDeck[i], this.monsterAttackModifierDeck[j]] = [this.monsterAttackModifierDeck[j], this.monsterAttackModifierDeck[i]];
    }
  }
}
