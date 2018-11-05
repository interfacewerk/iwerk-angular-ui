import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';
import { DocumentationService } from '../documentation.service';

@Pipe({
  name: 'codeSample',
  pure: false
})
export class CodeSamplePipe implements PipeTransform {
  codeSamples: {[sampleId: string]: string} = {};

  constructor(private http: HttpClient, private changeDetectorRef: ChangeDetectorRef) {
    this.http.get('assets/code-samples.json')
      .subscribe(c => {
        this.codeSamples = <any>c;
        this.changeDetectorRef.markForCheck();
      });
  }

  transform(sampleId: string, args?: any): any {
    return this.codeSamples[sampleId];
  }

}

@Pipe({
  name: 'componentDescription',
  pure: false
})
export class ComponentDescriptionPipe implements PipeTransform {
  constructor(
    private documentationService: DocumentationService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.documentationService.documentation$.subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
  }

  transform(name: string, type: 'directives'): string {
    const comp = this.documentationService.getComponentDocumentation(name, type);
    if (comp) {
      return comp.description;
    } else {
      return 'Loading';
    }
  }
}
