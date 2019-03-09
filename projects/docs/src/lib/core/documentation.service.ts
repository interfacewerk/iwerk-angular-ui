import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export interface InputType {
    name: string;
    description: string;
    type: string;
}

export interface OutputType {
    name: string;
    description: string;
    type: string;
    defaultValue: string;
}

export interface MethodType {
    name: string;
    returnType: string;
}

export interface ComponentDocumentation {
    name: string;
    description: string;
    inputsClass: Array<InputType>;
    outputsClass: Array<OutputType>;
    methodsClass: Array<MethodType>;
    selector: string;
}

export interface Documentation {
    directives: Array<ComponentDocumentation>;
}

@Injectable({
    providedIn: 'root'
})
export class DocumentationService {
    private documentationSubject = new BehaviorSubject<Documentation>(undefined);

    get documentation() {
        return this.documentationSubject.value;
    }

    get documentation$() {
        return this.documentationSubject.asObservable();
    }

    constructor(
        private http: HttpClient
    ) {
        this.http.get('assets/documentation/documentation.json')
        .subscribe((c: any) => {
          this.documentationSubject.next(c);
        });
    }

    getComponentDocumentation$(name: string, type: 'directives') {
        return this.documentationSubject.pipe(
            map(documentation => {
                if (!documentation) {
                    return undefined;
                } else {
                    return documentation[type].find(d => d.name === name);
                }
            })
        );
    }

    getComponentDocumentation(name: string, type: 'directives') {
        if (!this.documentation) {
            return undefined;
        } else {
            return this.documentation[type].find(d => d.name === name);
        }
    }
}
