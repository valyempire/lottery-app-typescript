/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the LotteryContainer
 */

export const LotteryContainer = styled('section')(() => {
  return {
    border: 'solid 2px gray',
    padding: '1em 0 2em 0',
    textAlign: 'center',
    margin: '1em auto auto',
    borderRadius: '10px',
    width: '40em',
  };
});

/**
 * Styles the LotteryButton
 */
export const LotteryButton = styled('button')(() => {
  return {
    backgroundColor: 'darkblue',
    color: ' white',
    fontSize: '120%',
    borderRadius: '10px',
    marginTop: '1em',
  };
});

