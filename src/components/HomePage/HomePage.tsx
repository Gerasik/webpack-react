import React from 'react'
import { ICounter } from './types'

export default function HomePage(props: { counters: ICounter; addCounter: any; increment: any; decrement: any; }) {
  const {
    counters, addCounter, increment, decrement,
  } = props;
  return (
    <>
      <button type="button" onClick={addCounter}>Add counter</button>
      <ul>
        {
          Object.entries(counters).map((item) => {
            if (item[0] === "counterCount"){
              return false
            }
            return (
            <li key={item[0]}>
              <b>id:</b>
              {item[0]}
              {' '}
              <b>value:</b>
              {item[1]}
              <button type="button" onClick={() => increment(item[0], item[1])}>+</button>
              <button type="button" onClick={() => decrement(item[0], item[1])}>-</button>
            </li>
          )})
        }
      </ul>
    </>
  );
}
