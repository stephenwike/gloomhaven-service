import { Component, OnInit } from '@angular/core';
import { LocalBackEndService } from 'src/services/local-back-end.service';

@Component({
  selector: 'app-monster-attack-modifier',
  templateUrl: './monster-attack-modifier.component.html',
  styleUrls: ['./monster-attack-modifier.component.scss']
})
export class MonsterAttackModifierComponent implements OnInit {

  currentCard: string;
  service: LocalBackEndService;
  constructor(service: LocalBackEndService) { 
    this.service = service;
    this.service.ShuffleDeck();
    this.currentCard = this.service.GetNextCard();
  }

  ngOnInit(): void {
  }

  

  GetNextCard(): void {
    console.log("HERE");
    this.currentCard = this.service.GetNextCard();
  }
}
