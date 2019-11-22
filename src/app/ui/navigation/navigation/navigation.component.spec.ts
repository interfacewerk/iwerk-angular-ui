import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { NavigationModule } from '../navigation.module';
import { Component, Inject, ViewChild, NgModule } from '@angular/core';
import { NavigationController, NavigationData } from '../navigation-controller.service';
import { By } from '@angular/platform-browser';

@Component({
  template: `some:depth:{{depth}}<button (click)="present()" class="present"></button><button (click)="dismiss()" class="dismiss"></button>`
})
class SomeComponent {
  depth = -1;

  constructor(
    private navCtrl: NavigationController,
    @Inject(NavigationData) public data: number
  ) {
    this.depth = this.data;
  }

  present() {
    this.navCtrl.present<number>(SomeComponent, this.data + 1)
      .then(v => this.depth = v);
  }

  dismiss() {
    this.navCtrl.dismiss(this.depth);
  }
}

@Component({
  template: `<iw-navigation #nav>
    <h1>Host component</h1>
  </iw-navigation>`
})
class HostComponent {
  @ViewChild('nav',  { static: true }) nav: NavigationComponent;
  present() {
    return this.nav.present(SomeComponent, 1);
  }
}

@NgModule({
  declarations: [
    HostComponent,
    SomeComponent
  ],
  entryComponents: [
    SomeComponent,
  ],
  imports: [NavigationModule]
})
class TestModule {}

describe('NavigationComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders the first view', () => {
    expect(fixture.debugElement.nativeElement.innerText).toBe('Host component');
  });

  it('stacks and unstacks', () => {
    component.present();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerText).toBe('some:depth:1');
    fixture.debugElement.query(By.css('.iw-navigation-container.iw-navigation-container--visible button.present'))
      .triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerText).toBe('some:depth:2');
    fixture.debugElement.query(By.css('.iw-navigation-container.iw-navigation-container--visible button.present'))
      .triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerText).toBe('some:depth:3');
    fixture.debugElement.query(By.css('.iw-navigation-container.iw-navigation-container--visible button.dismiss'))
      .triggerEventHandler('click', {});
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.iw-navigation-container.iw-navigation-container--visible button.dismiss'))
      .triggerEventHandler('click', {});
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.iw-navigation-container.iw-navigation-container--visible button.dismiss'))
      .triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.innerText).toBe('Host component');
  });
});
