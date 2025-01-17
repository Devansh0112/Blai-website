'use client'

import { useEffect, useRef } from 'react'

export default function AiSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = 600
    }
    setSize()
    window.addEventListener('resize', setSize)

    // Particle system
    const particles: Particle[] = []
    const particleCount = 100

    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 2
        this.vy = (Math.random() - 0.5) * 2
        this.size = Math.random() * 3 + 1
        this.color = `hsl(${Math.random() * 60 + 90}, 70%, 50%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <section className="relative bg-black pb-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-[600px]"
      />
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-7xl font-bold text-white mb-8 tracking-tight">
            LET AI
            <br />
            DO THE WORK
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Experience the future of crypto trading with our advanced AI technology
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="grid grid-cols-3 gap-8 w-full max-w-2xl">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#c3f53b] to-[#7bf03a] flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <p className="text-white/80 text-sm">Smart Trading</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#c3f53b] to-[#7bf03a] flex items-center justify-center">
                  <span className="text-2xl">📈</span>
                </div>
                <p className="text-white/80 text-sm">Real-time Analysis</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#c3f53b] to-[#7bf03a] flex items-center justify-center">
                  <span className="text-2xl">🔒</span>
                </div>
                <p className="text-white/80 text-sm">Secure Trading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

