import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageclientsComponent } from './pageclients.component';

describe('PageclientsComponent', () => {
  let component: PageclientsComponent;
  let fixture: ComponentFixture<PageclientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageclientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
