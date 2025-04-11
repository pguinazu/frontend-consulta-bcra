// styled.d.ts
import 'styled-components';
import type { AppTheme } from './src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
