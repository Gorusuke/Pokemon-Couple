import './styles.css'

export const Button = (
  { handleClick, text, showClassName }:
  { handleClick: () => void, text: string, showClassName?: boolean }
) => {
  return (
    <div className={!showClassName ? 'home-button-container' : ''}>
      <button
        className="send-button"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  )
}
