import { Observable } from 'rxjs';
import { ButtonState } from './button-state';

export interface IStateButtonDirective {
  state: Observable<ButtonState>;
}
