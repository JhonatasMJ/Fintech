import React, { CSSProperties } from 'react'


const style: CSSProperties = {
    border: 'var(--gap-s) solid var(--color-3)',
    width: 'var(--gap)',
    height: 'var(--gap)',
    borderRadius: '50%',
    borderRightColor: 'var(--color-4)',
    animation: "spin 1s linear infinite",
} 

const Loading = () => {
  return (
    <div style={style}></div>
  )
}

export default Loading