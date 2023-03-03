'use client'

import React, { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

export default function DarkModSwitch() {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const renderThemeChanger = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		if (currentTheme === 'dark') {
			return (
				<BsFillMoonFill
					className="h-6 w-6 cursor-pointer text-yellow-500  sm:text-2xl"
					role="button"
					onClick={() => setTheme('light' as const)}
				/>
			)
		}
		return (
			<MdLightMode
				className="h-8 w-8 text-gray-900 transition-all duration-300 hover:text-amber-500 sm:text-2xl"
				role="button"
				onClick={() => setTheme('dark' as const)}
			/>
		)
	}

	return <div>{renderThemeChanger()}</div>
}
