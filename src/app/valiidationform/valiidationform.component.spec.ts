import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiidationformComponent } from './valiidationform.component';

describe('ValiidationformComponent', () => {
  let component: ValiidationformComponent;
  let fixture: ComponentFixture<ValiidationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValiidationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValiidationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
