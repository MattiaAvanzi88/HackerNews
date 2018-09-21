import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussItemComponent } from './discuss-item.component';

describe('DiscussItemComponent', () => {
  let component: DiscussItemComponent;
  let fixture: ComponentFixture<DiscussItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
