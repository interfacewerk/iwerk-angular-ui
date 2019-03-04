import { Component, OnInit, Directive, OnDestroy, TemplateRef, Input } from '@angular/core';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.sass']
})
export class TabsComponent {
  selectedTemplate: TemplateRef<any>;

  tabs: { label: string, template: TemplateRef<any> }[] = [];
}

@Directive({
  selector: '[appTab]'
})
export class TabDirective implements OnInit, OnDestroy {
  @Input() appTab: string;

  constructor(private tabs: TabsComponent, private template: TemplateRef<any>) {}

  ngOnInit() {
    this.tabs.tabs.push({
      label: this.appTab,
      template: this.template
    });

    if (!this.tabs.selectedTemplate) {
      this.tabs.selectedTemplate = this.template;
    }
  }

  ngOnDestroy() {
    this.tabs.tabs = this.tabs.tabs.filter(t => t.template !== this.template);

    if (this.tabs.selectedTemplate === this.template && this.tabs.tabs.length > 0) {
      this.tabs.selectedTemplate = this.tabs.tabs[0].template;
    }
  }
}
