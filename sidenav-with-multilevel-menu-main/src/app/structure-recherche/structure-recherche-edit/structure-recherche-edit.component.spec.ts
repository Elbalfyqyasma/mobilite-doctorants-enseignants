import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureRechercheEditComponent } from './structure-recherche-edit.component';

describe('StructureRechercheEditComponent', () => {
  let component: StructureRechercheEditComponent;
  let fixture: ComponentFixture<StructureRechercheEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureRechercheEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureRechercheEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
