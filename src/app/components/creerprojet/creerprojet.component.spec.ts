import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerprojetComponent } from './creerprojet.component';

describe('CreerprojetComponent', () => {
  let component: CreerprojetComponent;
  let fixture: ComponentFixture<CreerprojetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerprojetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
