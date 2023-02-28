import React, { useState } from 'react';

/**
 * Imports components
 */
import { Ball, Num } from '../Ball';

/**
 * Imports styles
 */
import {
  LotteryContainer,
  LotteryButton
} from './Lottery.styled';

/**
 * Imports Types
 */
import { LotteryProps } from './Lottery.types';

/**
 * Displays the component
 */
export const Lottery: React.FC<LotteryProps> = (props) => {
  const { title, numBalls, maxNum } = props;

  /**
   * Initializes the balls length
   */
  const numBallsLength = Array.from({ length: numBalls }) as undefined[];

  /**
   * Initializes the number of balls
   */
  const [nums, setNums] = useState<Num[]>(numBallsLength);

  /**
   * Generate the numbers
   */
  const generate = () => {
    setNums(nums.map((n) => Math.floor(Math.random() * maxNum) + 1));
  };

  /**
   * Handle numbers inside the balls
   */
  const handleClick = () => {
    generate();
  };

  return (
    <LotteryContainer className="Lottery">
      <h1>{title}</h1>
      <div>
        {nums.map((n, id) => (
          <Ball num={n} key={id} />
        ))}
      </div>
      <LotteryButton onClick={handleClick}>Generate</LotteryButton>
    </LotteryContainer>
  );
};
