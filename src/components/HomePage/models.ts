export interface Counter {
  [key: number]: number;
  [key: string]: number;
}

export interface Action {
  type: string;
  id?: number;
  value?: number;
}

export interface HomePageProps {
  counters: Counter;
  addCounter: () => void;
  increment: (id: number | string, value: number) => void;
  decrement: (id: number | string, value: number) => void;
}
