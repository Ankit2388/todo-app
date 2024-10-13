import { StyleSheet } from 'react-native';

import { Palette } from '@src/utils';

export const TodoListStyles = ({ }: Palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    btnText: {
      color: '#ffff'
    }
  });
