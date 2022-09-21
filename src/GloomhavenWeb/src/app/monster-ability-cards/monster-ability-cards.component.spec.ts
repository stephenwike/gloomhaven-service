import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAbilityCardsComponent } from './monster-ability-cards.component';

describe('MonsterAbilityCardsComponent', () => {
  let component: MonsterAbilityCardsComponent;
  let fixture: ComponentFixture<MonsterAbilityCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterAbilityCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterAbilityCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
