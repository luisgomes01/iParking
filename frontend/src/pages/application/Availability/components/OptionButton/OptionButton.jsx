import './optionbutton.scss'

import React from 'react'

export default function OptionButton({
  chosenOption,
  options,
  section,
  setChosenOption
}) {
  function handleClick(option) {
    setChosenOption(option)
  }

  return options
    .filter(option => option.section === section)
    .map((option, index) => {
      return (
        <button
          className={`d-flex align-items-center justify-content-center park-option rounded p-3 my-2 border-0 
          ${option.disponibility ? ' bg-success text-light' : 'bg-none'}
          ${option === chosenOption ? 'chosen' : null}`}
          key={index}
          onClick={() => handleClick(option)}
          disabled={!option.disponibility}
        >
          {option.section}
          {option.number}
        </button>
      )
    })
}
