import React from 'react'

export default function Button(props) {
    const {name,click} = props
  return (
    <button onClick={click} className="px-8 py-4 mx-auto rounded-md border-2 border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
        <p>{name}</p>
      </button>
  )
}
