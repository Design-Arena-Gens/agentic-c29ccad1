'use client';

import { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';

export const AppProviders = ({ children }: { children: ReactNode }) => <AuthProvider>{children}</AuthProvider>;
