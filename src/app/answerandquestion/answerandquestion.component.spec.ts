import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerandquestionComponent } from './answerandquestion.component';

describe('AnswerandquestionComponent', () => {
  let component: AnswerandquestionComponent;
  let fixture: ComponentFixture<AnswerandquestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerandquestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerandquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
