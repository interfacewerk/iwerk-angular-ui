import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MultiSelectComponent } from './multi-select.component';
import { By } from '@angular/platform-browser';

describe('MultiSelectComponent', () => {
  let component: MultiSelectComponent;
  let fixture: ComponentFixture<MultiSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectComponent);
    component = fixture.componentInstance;
    component.indexBy = (a: any) => a.value;
    fixture.detectChanges();
  });

  it('filters options', () => {
    component.options = [
      { label: 'AAAA', value: 'a', icon: '' },
      { label: 'BBBB', value: 'b', icon: '' }
    ];
    component.indexBy = (a: any) => a.value;

    let shown: any = [];
    component.optionsToShow.subscribe(s => shown = s);
    component.ngOnChanges();
    component.search.next('aaa');
    expect(shown).toEqual([{ label: 'AAAA', value: 'a', icon: '' }]);
  });

  it('opens the options menu', fakeAsync(() => {
    component.options = [
      { label: 'AAAA', value: 'a', icon: '' },
      { label: 'BBBB', value: 'b', icon: '' }
    ];
    const input = fixture.debugElement.query(By.css('input'));
    (<HTMLElement>input.nativeElement).dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    tick(0);
    expect(
      fixture.debugElement.queryAll(By.css('.iw-select__options-list')).length
    ).toBe(1);
  }));

  it('hide the options menu on blur', fakeAsync(() => {
    component.options = [
      { label: 'AAAA', value: 'a', icon: '' },
      { label: 'BBBB', value: 'b', icon: '' }
    ];
    const input = fixture.debugElement.query(By.css('input'));
    (<HTMLElement>input.nativeElement).dispatchEvent(new Event('focus'));
    fixture.detectChanges();
    tick(0);
    (<HTMLElement>input.nativeElement).dispatchEvent(new Event('blur'));
    fixture.detectChanges();
    tick(0);
    expect(
      fixture.debugElement.queryAll(By.css('.iw-select__options-list')).length
    ).toBe(0);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

