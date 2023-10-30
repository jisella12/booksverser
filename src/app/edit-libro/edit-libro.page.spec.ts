import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditLibroPage } from './edit-libro.page';

describe('EditLibroPage', () => {
  let component: EditLibroPage;
  let fixture: ComponentFixture<EditLibroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
