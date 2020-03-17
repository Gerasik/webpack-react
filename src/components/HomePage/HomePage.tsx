import React from 'react';
import { HomePageProps } from './models';

const HomePage: React.FunctionComponent<HomePageProps> = props => {
  const { counters, addCounter, increment, decrement } = props;
  return (
    <>
      <button type="button" onClick={addCounter}>
        Add counter
      </button>
      <ul>
        {Object.entries(counters).map(item => {
          if (item[0] === 'counterCount') {
            return null;
          }
          return (
            <li key={item[0]}>
              <b>id:</b>
              {item[0]}
              <b>value:</b>
              {item[1]}
              <button type="button" onClick={(): void => increment(item[0], item[1])}>
                +
              </button>
              <button type="button" onClick={(): void => decrement(item[0], item[1])}>
                -
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default HomePage;
