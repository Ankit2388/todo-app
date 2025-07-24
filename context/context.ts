
import { loader } from '@/utils';

import { useLanguage } from './LocalizationContext';
import { storage } from './storage';
import { useColor } from './ThemeContext';


export const useAppContuseAppContextextOnly = () => {
  const color = useColor();
  const { ...language } = useLanguage();

  return {
    loader: loader,
    storage,
    ...color,
    ...language,
  };
};

// export type AppContextType = ReturnType<typeof useAppContextOnly>;

// export const useAppContext = (): AppContextType => {
//   return useAppContextOnly()

// };


