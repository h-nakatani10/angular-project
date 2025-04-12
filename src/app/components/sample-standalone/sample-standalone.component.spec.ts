import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleStandaloneComponent } from './sample-standalone.component';

describe('SampleStandaloneComponent', () => {
  let component: SampleStandaloneComponent;
  let fixture: ComponentFixture<SampleStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleStandaloneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
