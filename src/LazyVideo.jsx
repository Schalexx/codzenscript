import { useEffect, useRef, useState } from 'react'

function LazyVideo({ src, poster, className, autoPlay = true, muted = true, loop = true, playsInline = true }) {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Video is in viewport, start loading
            const source = video.querySelector('source')
            if (source && source.dataset.src) {
              source.src = source.dataset.src
              // Use metadata preload for faster initial display
              video.preload = 'metadata'
              video.load()
              setIsLoaded(true)

              if (autoPlay) {
                // Small delay to allow metadata to load
                setTimeout(() => {
                  video.play().then(() => {
                    setIsPlaying(true)
                  }).catch(() => {
                    // Auto-play was prevented
                  })
                }, 100)
              }
            }
          } else if (!entry.isIntersecting && isLoaded) {
            // Pause video when out of viewport to save bandwidth
            if (video && !video.paused) {
              video.pause()
            }
          } else if (entry.isIntersecting && isLoaded) {
            // Resume playing when back in viewport
            if (video && video.paused && autoPlay) {
              video.play().catch(() => {})
            }
          }
        })
      },
      {
        rootMargin: '200px', // Start loading 200px before entering viewport
        threshold: 0.1
      }
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [autoPlay, isLoaded])

  return (
    <div className="relative w-full">
      {/* Loading placeholder */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-white text-sm opacity-70">Loading...</div>
        </div>
      )}

      <video
        ref={videoRef}
        className={className}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        poster={poster}
        preload="none"
        onPlaying={() => setIsPlaying(true)}
      >
        <source data-src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default LazyVideo
