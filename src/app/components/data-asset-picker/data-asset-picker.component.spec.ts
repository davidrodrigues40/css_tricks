import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAssetPickerComponent } from './data-asset-picker.component';

describe('DataAssetPickerComponent', () => {
  let component: DataAssetPickerComponent;
  let fixture: ComponentFixture<DataAssetPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataAssetPickerComponent]
    });
    fixture = TestBed.createComponent(DataAssetPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
