import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalCsvFileComponent } from './external-csv-file.component';

describe('ExternalCsvFileComponent', () => {
  let component: ExternalCsvFileComponent;
  let fixture: ComponentFixture<ExternalCsvFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalCsvFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalCsvFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
