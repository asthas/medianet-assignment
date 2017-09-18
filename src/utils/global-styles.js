/**
 * Global styles
 */

import { cssRule } from 'typestyle';

export const insertGlobalStyles = () => {
  cssRule('p', {
    margin: 0,
  });
  cssRule('a', {
    color: 'inherit',
    textDecoration: 'none',
  });
}
