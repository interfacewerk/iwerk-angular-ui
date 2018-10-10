import { Observable } from 'rxjs/Observable';
import { ButtonState } from './button-state';

export interface IStateButtonDirective {
  state: Observable<ButtonState>;
}
