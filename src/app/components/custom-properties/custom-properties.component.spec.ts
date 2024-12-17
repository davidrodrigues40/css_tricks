import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPropertiesComponent } from './custom-properties.component';

describe('CustomPropertiesComponent', () => {
  let component: CustomPropertiesComponent;
  let fixture: ComponentFixture<CustomPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPropertiesComponent]
    });
    fixture = TestBed.createComponent(CustomPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
