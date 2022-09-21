import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterAttackModifierComponent } from './monster-attack-modifier.component';

describe('MonsterAttackModifierComponent', () => {
  let component: MonsterAttackModifierComponent;
  let fixture: ComponentFixture<MonsterAttackModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterAttackModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterAttackModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
