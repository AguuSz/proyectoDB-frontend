import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListModalComponent } from './update-list-modal.component';

describe('UpdateListModalComponent', () => {
  let component: UpdateListModalComponent;
  let fixture: ComponentFixture<UpdateListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateListModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
