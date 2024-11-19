import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPicturesPage } from './add-pictures.page';

describe('AddPicturesPage', () => {
  let component: AddPicturesPage;
  let fixture: ComponentFixture<AddPicturesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPicturesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
