import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembresListeComponent } from './membres-liste.component';

describe('MembresListeComponent', () => {
  let component: MembresListeComponent;
  let fixture: ComponentFixture<MembresListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembresListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
