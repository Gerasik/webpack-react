interface ICounter {
  [key: number]: number;
  [key: string]: number;
}
interface IAction {
  type: string,
  id?: number,
  value?: number
}
export {
  ICounter,
  IAction
}
