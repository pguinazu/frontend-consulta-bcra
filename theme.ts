// src/theme.ts
export const theme = {
    colors: {
      background: '#121212',
      text: '#ffffff',
      primary: '#4F46E5',
      danger: '#EF4444',
      success: '#10B981',
      muted: '#9CA3AF',
    },
    fontSizes: {
      title: 24,
      subtitle: 18,
      text: 16,
      small: 14,
    },
    spacing: {
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
    },
    radius: {
      sm: 6,
      md: 12,
      lg: 24,
    },
  };
  
  export type AppTheme = typeof theme;
  