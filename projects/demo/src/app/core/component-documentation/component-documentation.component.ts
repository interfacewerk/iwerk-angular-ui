import { Component, Input, OnInit, Directive, TemplateRef, ElementRef, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrls: ['./component-documentation.component.scss']
})
export class ComponentDocumentationComponent implements OnInit {
  @Input() componentId: string;
  @Input() componentType: 'directives';
  @Input() componentTitle: string;

  examples: ComponentExampleDirective[] = [];

  tab$: Observable<'overview' | 'examples' | 'api'>;
  isOverview$: Observable<boolean>;
  isExamples$: Observable<boolean>;
  isApi$: Observable<boolean>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.tab$ = this.route.queryParams.pipe(map(p => p.tab || 'overview'));
    this.isOverview$ = this.tab$.pipe(map(v => v === 'overview'));
    this.isExamples$ = this.tab$.pipe(map(v => v === 'examples'));
    this.isApi$ = this.tab$.pipe(map(v => v === 'api'));
  }

  ngOnInit() {
  }

  registerExample(example: ComponentExampleDirective) {
    this.examples.push(example);
  }

  select(tab: 'overview' | 'examples' | 'api') {
    this.router.navigate(['.'], {
      queryParamsHandling: 'merge',
      queryParams: {
        tab
      },
      relativeTo: this.route,
    });
  }
}

@Directive({
  selector: '[appAnchorContainer]'
})
export class AnchorContainerDirective implements AfterViewChecked {
  @Input() appAnchorContainer: string;
  private anchors: AnchorDirective[] = [];
  private currentAnchor: string;

  constructor(private elementRef: ElementRef) {

  }

  registerAnchor(anchor: AnchorDirective) {
    this.anchors.push(anchor);
  }

  ngAfterViewChecked() {
    if (this.currentAnchor === this.appAnchorContainer) {
      return;
    }

    this.currentAnchor = this.appAnchorContainer;
    const element = <HTMLElement>this.elementRef.nativeElement;
    const anchor = <HTMLElement>(this.anchors.find(a => a.appAnchor === this.appAnchorContainer).elementRef.nativeElement);

    element.scrollTop = anchor.offsetTop - element.offsetTop - 15;
  }
}

@Directive({
  selector: '[appAnchor]'
})
export class AnchorDirective {
  @Input() appAnchor: string;

  constructor(
    private container: AnchorContainerDirective,
    public elementRef: ElementRef
  ) {
    this.container.registerAnchor(this);
  }
}

@Directive({
  selector: '[appComponentExample]'
})
export class ComponentExampleDirective {
  @Input() appComponentExample: string;
  @Input() source: string;

  constructor(
    private documentation: ComponentDocumentationComponent,
    public template: TemplateRef<any>
  ) {
    this.documentation.registerExample(this);
  }
}

