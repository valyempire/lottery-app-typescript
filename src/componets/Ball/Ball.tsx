import React from 'react';
/**
 * Imports components
 */
import { BallProps } from './Ball.types';

/**
 * Imports styles
 */
import { BallsContainer } from './Ball.styled';

/**
 * Displays the component
 */
export const Ball: React.FC<BallProps> = (props) => {
  return (<BallsContainer >{props.num}</BallsContainer>);
};
