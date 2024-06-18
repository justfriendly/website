'use client'

import { QueryProvider } from '../query-client';

const ContentWrapper = ({ children }: any) => {
  return (
    <QueryProvider>
				{children}
    </QueryProvider>
  );
};

export default ContentWrapper;