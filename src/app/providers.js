'use client'

import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <ThemeProvider 
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
      themes={['light', 'dark']}
    >
      {children}
    </ThemeProvider>
  )
}