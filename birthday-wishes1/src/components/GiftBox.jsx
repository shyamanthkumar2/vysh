export default function GiftBox({ onClick }) {
    return (
      <div className="gift-box" onClick={onClick}>
        <div className="box">
          <div className="box-top"></div>
          <div className="box-bottom"></div>
        </div>
        <div className="ribbon-horizontal"></div>
        <div className="ribbon-vertical"></div>
        <div className="bow">
          <div className="bow-left"></div>
          <div className="bow-right"></div>
          <div className="bow-center"></div>
        </div>
        <div className="sparkles">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="sparkle"></div>
          ))}
        </div>
      </div>
    )
  }