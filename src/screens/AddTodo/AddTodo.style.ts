import { StyleSheet } from 'react-native';

import { Palette, scaleHeight, scaleWidth } from '@src/utils';

export const AddTodoStyles = ({ white }: Palette) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: scaleWidth(20)
    },
    input: {
      marginVertical: scaleHeight(10),
      marginTop: scaleHeight(30)
    },
    submitBtn: {
      marginTop: scaleHeight(15),
    },
    submitBtnText: {
      color: white
    }
  });
