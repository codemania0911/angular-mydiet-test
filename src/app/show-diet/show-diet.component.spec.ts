import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDietComponent } from './show-diet.component';

describe('ShowDietComponent', () => {
  let component: ShowDietComponent;
  let fixture: ComponentFixture<ShowDietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
