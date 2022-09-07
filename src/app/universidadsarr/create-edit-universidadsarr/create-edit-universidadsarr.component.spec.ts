import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditUniversidadsarrComponent } from './create-edit-universidadsarr.component';

describe('CreateEditUniversidadsarrComponent', () => {
  let component: CreateEditUniversidadsarrComponent;
  let fixture: ComponentFixture<CreateEditUniversidadsarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditUniversidadsarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditUniversidadsarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
