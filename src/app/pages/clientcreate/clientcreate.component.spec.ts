import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcreateComponent } from './clientcreate.component';

describe('ClientcreateComponent', () => {
  let component: ClientcreateComponent;
  let fixture: ComponentFixture<ClientcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
