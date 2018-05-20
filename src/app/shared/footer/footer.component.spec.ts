
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer.component';


describe('FooterComponent', () => {

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [
        FooterComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should have as currentDate "date"', async(() => {
    const fixture = TestBed.createComponent(FooterComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.currentDate).toBeTruthy();
  }));

  // it('should have as currentDate "date"', async(() => {
  //   const fixture = TestBed.createComponent(FooterComponent);
  //   fixture.detectChanges();
  //   const component = fixture.debugElement.nativeElement;
  //   expect(component.querySelector('p')).toContain('&copy;');
  // }));

});
