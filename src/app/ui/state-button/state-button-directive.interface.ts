import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ButtonState } from './button-state';

export interface IStateButtonDirective {
  state: BehaviorSubject<ButtonState>;
}
