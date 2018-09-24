import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.scss']
})
export class FormControlDemoComponent implements OnInit {

  control1 = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  constructor() { }

  ngOnInit() {
  }

}
