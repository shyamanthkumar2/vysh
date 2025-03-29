export default function Confetti({ active }) {
    if (!active) return null
    
    return (
      <div className="confetti-container">
        {Array.from({ length: 100 }).map((_, i) => {
          const left = Math.random() * 100
          const animationDuration = Math.random() * 3 + 2
          const delay = Math.random() * 5
          const size = Math.random() * 10 + 5
          const color = `hsl(${Math.random() * 360}, 100%, 50%)`
          const shape = Math.random() > 0.5 ? 'square' : 'circle'
          
          return (
            <div
              key={i}
              className={`confetti ${shape}`}
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color,
                animationDuration: `${animationDuration}s`,
                animationDelay: `${delay}s`
              }}
            />
          )
        })}
      </div>
    )
  }