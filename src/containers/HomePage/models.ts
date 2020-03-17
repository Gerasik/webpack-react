/* eslint-disable prettier/prettier */
import Immutable from 'immutable';

export interface ActionInterace {
  type: string;
  payload?: {
    id: number;
  };
}

export interface CounterInterace {
  [key: number]: number;
  [key: string]: number;
}

export type Reducer<S, A = ActionInterace> = (state: S, action?: A) => S;

export interface HomePageProps {
  counters: CounterInterace;
  addCounter: () => void;
  increment: (id: number | string, value: number) => void;
  decrement: (id: number | string, value: number) => void;
}

export type State = Immutable.Map<string, number>;

export namespace Payload {
  export interface IncreaseValue {
    id: string;
  }
  export interface DecreaseValue {
    id: string;
  }
}

export namespace Action {
  export type IncreaseValue = Reducer<Payload.IncreaseValue>;
}

export namespace ActionCreator {
  export type IncreaseValue = (id: string) => Action.IncreaseValue;
}
