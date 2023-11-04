import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalButtonListComponent } from './external-button-list.component';

describe('ExternalButtonListComponent', () => {
  let component: ExternalButtonListComponent;
  let fixture: ComponentFixture<ExternalButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalButtonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
