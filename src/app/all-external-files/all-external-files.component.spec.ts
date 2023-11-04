import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExternalFilesComponent } from './all-external-files.component';

describe('AllExternalFilesComponent', () => {
  let component: AllExternalFilesComponent;
  let fixture: ComponentFixture<AllExternalFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllExternalFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllExternalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
