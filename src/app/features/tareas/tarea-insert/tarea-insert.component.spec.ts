import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaInsertComponent } from './tarea-insert.component';

describe('TareaInsertComponent', () => {
  let component: TareaInsertComponent;
  let fixture: ComponentFixture<TareaInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TareaInsertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
