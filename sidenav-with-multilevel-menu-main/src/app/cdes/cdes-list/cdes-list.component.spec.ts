import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdesListComponent } from './cdes-list.component';

describe('CdesListComponent', () => {
  let component: CdesListComponent;
  let fixture: ComponentFixture<CdesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
