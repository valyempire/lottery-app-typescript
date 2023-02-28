import React from 'react';
import { Lottery } from './componets/Lottery';

export const App: React.FC = () => {
  return (
    <div>
      <Lottery title="Lottery 6 from 49" maxNum={49} numBalls={6} />
      <Lottery title="Mini Daily" maxNum={10} numBalls={4} />
    </div>
  );
};
