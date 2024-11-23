"use client"

import { useState, useEffect } from 'react'
import { Sun, Moon, BarChart2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="fixed bottom-8 left-8 flex flex-col gap-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="rounded-full bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4 text-black" />
        ) : (
          <Moon className="h-4 w-4 text-white" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
      {/* <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800 hover:bg-zinc-700 dark:bg-zinc-200 dark:hover:bg-zinc-300">
        <BarChart2 className="h-4 w-4 text-zinc-100 dark:text-zinc-900" />
        <span className="sr-only">Toggle menu</span>
      </Button> */}
    </div>
  )
}

