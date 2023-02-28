/**
 * Imports styled
 */
import { styled } from '@mui/system';

/**
 * Styles the BallsContainer
 */
export const BallsContainer = styled('div')(() => {
  return {
    backgroundColor: 'tomato',
    borderRadius: '50%',
    color: 'white',
    display: 'inline-block',
    width: '3em',
    height: '2.25em',
    paddingTop: '0.75em',
    textAlign: 'center',
    marginRight: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.5em',
  };
});
