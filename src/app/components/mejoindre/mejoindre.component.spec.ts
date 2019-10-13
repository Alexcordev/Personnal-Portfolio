import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoindreComponent } from './mejoindre.component';

describe('MejoindreComponent', () => {
  let component: MejoindreComponent;
  let fixture: ComponentFixture<MejoindreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoindreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejoindreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
