import { useState, useEffect } from 'react'

const TIMER_KEY = 'nba2k_countdown_timer'
const TIMER_DURATION = 10 * 60 // 10 minutes in seconds

function useTimer() {
  const [timeLeft, setTimeLeft] = useState(() => {
    // Check if timer exists in localStorage
    const stored = localStorage.getItem(TIMER_KEY)
    if (stored) {
      const { endTime } = JSON.parse(stored)
      const now = Date.now()
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000))
      return remaining
    }

    // Initialize new timer
    const endTime = Date.now() + (TIMER_DURATION * 1000)
    localStorage.setItem(TIMER_KEY, JSON.stringify({ endTime }))
    return TIMER_DURATION
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const stored = localStorage.getItem(TIMER_KEY)
      if (!stored) return

      const { endTime } = JSON.parse(stored)
      const now = Date.now()
      const remaining = Math.max(0, Math.floor((endTime - now) / 1000))

      setTimeLeft(remaining)

      // Timer reached zero
      if (remaining === 0) {
        // Reset timer to 10 minutes
        const newEndTime = Date.now() + (TIMER_DURATION * 1000)
        localStorage.setItem(TIMER_KEY, JSON.stringify({ endTime: newEndTime }))
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Convert seconds to hours, minutes, seconds
  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  return { hours, minutes, seconds }
}

export default useTimer
