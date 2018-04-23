import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeventComponent } from './formevent.component';

describe('FormeventComponent', () => {
  let component: FormeventComponent;
  let fixture: ComponentFixture<FormeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
