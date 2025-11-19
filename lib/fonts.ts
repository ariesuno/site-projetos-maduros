import { Montserrat, Inter } from 'next/font/google';

export const fontHeading = Montserrat({ 
  subsets: ['latin'], 
  weight: ['700','500','400'], 
  variable: '--font-heading' 
});

export const fontBody = Inter({ 
  subsets: ['latin'], 
  weight: ['700','600','400'], 
  variable: '--font-body' 
});

