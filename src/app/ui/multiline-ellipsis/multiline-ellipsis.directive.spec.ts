import { Component, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MultilineEllipsisModule } from './multiline-ellipsis.module';
import { MultilineEllipsisDirective } from './multiline-ellipsis.directive';

@Component({
  template: `<p #p1 [style.max-height]="maxHeight" [iwMultilineEllipsis]="text"></p>
  <p #p2 style="width: 30px; max-height: 300px" [iwMultilineEllipsis]="text"></p>`
})
class EllipsisComponent {
  @ViewChild('p1',  { static: true }) p1: ElementRef;
  @ViewChild('p2',  { static: true }) p2: ElementRef;
  @ViewChildren(MultilineEllipsisDirective) ellipsis: QueryList<MultilineEllipsisDirective>;

  maxHeight = '30px';
  text = 'cut the text around here please sdkfjlk sjlk <span>fsklkjsf</span> qlksdj flkqkqsf';
}

describe('MultilineEllipsisDirective', () => {
  let fixture: ComponentFixture<EllipsisComponent>;

  beforeEach(() => {
    document.body.style.width = '250px';
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    TestBed.configureTestingModule({
      declarations: [EllipsisComponent],
      imports: [MultilineEllipsisModule]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(EllipsisComponent);
    document.body.appendChild(fixture.nativeElement);
    fixture.detectChanges();
  });

  it('should cut the text', () => {
    expect(fixture.componentInstance.p1.nativeElement.innerHTML).toBe(
      'cut the text around here please<span class="ellipsis">…</span>'
    );
  });

  it('stays the same after view checked', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.p1.nativeElement.innerHTML).toBe(
      'cut the text around here please<span class="ellipsis">…</span>'
    );
  });

  it('isOverflowing returns true', () => {
    expect(fixture.componentInstance.ellipsis.first.isOverflowing).toBe(true);
  });

  it('adapts to the height', () => {
    fixture.componentInstance.maxHeight = '60px';
    fixture.detectChanges();
    expect(fixture.componentInstance.p1.nativeElement.innerHTML).toBe(
      'cut the text around here please sdkfjlk sjlk <span>fsklkjsf</span> qlksdj flkqkqsf'
    );
  });

  it('adjusts when resizing and does not display any ellipsis', () => {
    document.body.style.width = '2000px';
    window.dispatchEvent(new Event('resize'));
    expect(fixture.componentInstance.p1.nativeElement.innerHTML).toBe(
      'cut the text around here please sdkfjlk sjlk <span>fsklkjsf</span> qlksdj flkqkqsf'
    );
  });

  it('does not throw ExpressionChangedAfterItHasBeenCheckedError', () => {
    expect(() => {
      fixture.componentInstance.maxHeight = '60px';
      fixture.detectChanges();
      fixture.componentInstance.maxHeight = '20px';
      fixture.detectChanges();
    }).not.toThrow();
  });

});

@Component({
  template: `<p #p1 [style.max-height]="maxHeight"
    [iwMultilineEllipsis]="text"
    (truncated)="truncated = $event"
  ></p>
  <button *ngIf="truncated"></button>`
})
class StubComponent {
  @ViewChild('p1',  { static: true }) p1: ElementRef;
  @ViewChildren(MultilineEllipsisDirective) ellipsis: QueryList<MultilineEllipsisDirective>;

  maxHeight = '30px';
  text = 'cut the text around here please sdkfjlk sjlk <span>fsklkjsf</span> qlksdj flkqkqsf';
}

describe('MultilineEllipsisDirective truncated event', () => {
  let fixture: ComponentFixture<StubComponent>;

  beforeEach(() => {
    document.body.style.width = '250px';
    document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';
    TestBed.configureTestingModule({
      declarations: [StubComponent],
      imports: [MultilineEllipsisModule]
    });
    TestBed.compileComponents();
    fixture = TestBed.createComponent(StubComponent);
    document.body.appendChild(fixture.nativeElement);
    fixture.detectChanges();
  });

  it('does not throw ExpressionChangedAfterItHasBeenCheckedError', () => {
    expect(() => {
      fixture.componentInstance.maxHeight = '60px';
      fixture.detectChanges();
      fixture.componentInstance.maxHeight = '20px';
      fixture.detectChanges();
    }).not.toThrow();
  });

});
