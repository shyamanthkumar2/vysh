export default function Balloons({ count }) {
    const colors = [
      '#ff6b6b', '#ffa502', '#eccc68', 
      '#7bed9f', '#70a1ff', '#5352ed', 
      '#ff4757', '#ff6348', '#fffa65'
    ]
    
    return (
      <div className="balloons-container">
        {Array.from({ length: count }).map((_, i) => {
          const size = Math.random() * 30 + 20
          const left = Math.random() * 100
          const animationDuration = Math.random() * 6 + 4
          const color = colors[Math.floor(Math.random() * colors.length)]
          
          return (
            <div 
              key={i}
              className="balloon"
              style={{
                left: `${left}%`,
                width: `${size}px`,
                height: `${size * 1.2}px`,
                backgroundColor: color,
                animationDuration: `${animationDuration}s`
              }}
            >
              <div className="balloon-tie"></div>
            </div>
          )
        })}
      </div>
    )
  }