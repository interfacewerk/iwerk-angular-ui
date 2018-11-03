import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Pipe, PipeTransform } from '@angular/core';

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
