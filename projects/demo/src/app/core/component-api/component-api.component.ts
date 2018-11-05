import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentationService, InputType, OutputType, ComponentDocumentation, MethodType } from '../documentation.service';

@Component({
  selector: 'app-component-api',
  templateUrl: './component-api.component.html',
  styleUrls: ['./component-api.component.scss']
})
export class ComponentApiComponent implements OnChanges {
  @Input() componentId: string;
  @Input() componentType: 'directives';

  documentation$: Observable<ComponentDocumentation>;

  inputs$: Observable<InputType[]>;
  outputs$: Observable<OutputType[]>;
  methods$: Observable<MethodType[]>;
  selector$: Observable<string>;
  hasOutputs$: Observable<boolean>;
  hasInputs$: Observable<boolean>;
  hasMethods$: Observable<boolean>;

  constructor(
    private documentation: DocumentationService
  ) { }

  ngOnChanges() {
    this.documentation$ = this.documentation.getComponentDocumentation$(this.componentId, this.componentType);
    this.selector$ = this.documentation$.pipe(map(d => d ? d.selector : ''));
    this.inputs$ = this.documentation$
      .pipe(
        map(d => d ? d.inputsClass || [] : []),
        map(sortByName)
      );
    this.outputs$ = this.documentation$
      .pipe(
        map(d => d ? d.outputsClass || [] : []),
        map(sortByName)
      );
    this.methods$ = this.documentation$
      .pipe(
        map(d => d ? d.methodsClass || [] : []),
        map(sortByName)
      );
    this.hasOutputs$ = this.outputs$.pipe(map(a => a.length > 0));
    this.hasInputs$ = this.inputs$.pipe(map(a => a.length > 0));
    this.hasMethods$ = this.methods$.pipe(map(a => a.length > 0));
  }
}

function sortByName<T extends {name: string}>(arr: T[]): T[] {
  const result = (arr || []).slice(0);
  result.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
}
