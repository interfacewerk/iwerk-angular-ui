import { BehaviorSubject } from 'rxjs';
import { ButtonState } from './button-state';

export interface IStateButtonDirective {
  state: BehaviorSubject<ButtonState>;
}
