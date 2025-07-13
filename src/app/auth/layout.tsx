import TestAccountDetail from '@/components/TestAccountDetail';
import { BackgroundBeams } from '@/components/ui/background-beams';
import React from 'react'

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return (
    <div>
      <BackgroundBeams/>
      {children}
      <TestAccountDetail/>
    </div>
  )
}

