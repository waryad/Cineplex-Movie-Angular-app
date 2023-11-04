import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalJsonListComponent } from './external-json-list.component';

describe('ExternalJsonListComponent', () => {
  let component: ExternalJsonListComponent;
  let fixture: ComponentFixture<ExternalJsonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalJsonListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalJsonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
