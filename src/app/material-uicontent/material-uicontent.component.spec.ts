import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialUIContentComponent } from './material-uicontent.component';

describe('MaterialUIContentComponent', () => {
  let component: MaterialUIContentComponent;
  let fixture: ComponentFixture<MaterialUIContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialUIContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialUIContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
