import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFormComponent } from './color-form-component.component';

describe('ColorFormComponentComponent', () => {
  let component: ColorFormComponent;
  let fixture: ComponentFixture<ColorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
