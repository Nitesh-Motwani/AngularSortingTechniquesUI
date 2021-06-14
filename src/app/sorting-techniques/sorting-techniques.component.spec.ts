import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingTechniquesComponent } from './sorting-techniques.component';

describe('SortingTechniquesComponent', () => {
  let component: SortingTechniquesComponent;
  let fixture: ComponentFixture<SortingTechniquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingTechniquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
