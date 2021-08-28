import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreTableComponent } from './membre-table.component';

describe('CustomerTableComponent', () => {
  let component: MembreTableComponent;
  let fixture: ComponentFixture<MembreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
