import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadrdvComponent } from './readrdv.component';

describe('ReadrdvComponent', () => {
  let component: ReadrdvComponent;
  let fixture: ComponentFixture<ReadrdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadrdvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadrdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
