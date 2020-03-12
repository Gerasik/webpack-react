import React from 'react'
import { Counter } from './types'

export default function HomePage(props: { counters: Array<Counter>; addCounter: any; increment: any; decrement: any; }) {
  const {
    counters, addCounter, increment, decrement,
  } = props
  if (counters && addCounter) {
    return (
      <>
        <button type="button" onClick={addCounter}>Add counter</button>
        <ul>
          {
            counters.map((item: { id: number; value: number; }) => (
              <li key={item.id}>
                <b>id:</b>
                {item.id}
                {' '}
                <b>value:</b>
                {item.value}
                <button type="button" onClick={() => increment(item.id)}>+</button>
                <button type="button" onClick={() => decrement(item.id)}>-</button>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}
