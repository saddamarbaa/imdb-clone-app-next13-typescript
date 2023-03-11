'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
	children: ReactNode
}

export default function Providers({ children }: Props) {
	return (
		<ThemeProvider enableSystem={true} attribute="class">
			<div className="transition-color min-h-screen select-none text-gray-700 duration-300 dark:bg-gray-700 dark:text-gray-200 flex flex-col">
				{' '}
				{children}
			</div>
		</ThemeProvider>
	)
}
