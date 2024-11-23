import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaHomeComponent } from './tarea-home.component';

describe('TareaHomeComponent', () => {
  let component: TareaHomeComponent;
  let fixture: ComponentFixture<TareaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
