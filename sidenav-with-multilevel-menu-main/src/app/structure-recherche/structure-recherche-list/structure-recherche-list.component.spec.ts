import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureRechercheListComponent } from './structure-recherche-list.component';

describe('StructureRechercheListComponent', () => {
  let component: StructureRechercheListComponent;
  let fixture: ComponentFixture<StructureRechercheListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureRechercheListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureRechercheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
