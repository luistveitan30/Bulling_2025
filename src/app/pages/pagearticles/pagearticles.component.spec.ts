import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagearticlesComponent } from './pagearticles.component';

describe('PagearticlesComponent', () => {
  let component: PagearticlesComponent;
  let fixture: ComponentFixture<PagearticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagearticlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagearticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
