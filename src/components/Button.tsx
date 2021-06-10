import * as React from 'react'

const Button = ({ color }: { color: string }) => {
  console.log(color)
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={() => console.log('click')}
    >
      ini button KEREN
    </button>
  )
}

export default Button
