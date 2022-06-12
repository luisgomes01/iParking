import './availability.scss'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useRouterDom } from '../../../contexts/RouterDom'
import { CONSTANTS } from '../../../utils/constants'
import Home from '../../home/Home'
import OptionButton from './components/OptionButton/OptionButton'

export default function Availability() {
  const { navigate } = useRouterDom()
  const [options, setOptions] = useState([])
  const [chosenOption, setChosenOption] = useState(null)

  function saveOption() {
    localStorage.setItem('@iparking/park', JSON.stringify(chosenOption))
    navigate('/application/payment')
  }

  useEffect(() => {
    const parking = [
      {
        disponibility: true,
        number: 1,
        section: 'A'
      },
      {
        disponibility: false,
        number: 2,
        section: 'A'
      },
      {
        disponibility: true,
        number: 3,
        section: 'A'
      },
      {
        disponibility: false,
        number: 4,
        section: 'A'
      },
      {
        disponibility: true,
        number: 5,
        section: 'A'
      },
      {
        disponibility: true,
        number: 1,
        section: 'B'
      },
      {
        disponibility: false,
        number: 2,
        section: 'B'
      },
      {
        disponibility: true,
        number: 3,
        section: 'B'
      },
      {
        disponibility: false,
        number: 4,
        section: 'B'
      },
      {
        disponibility: true,
        number: 5,
        section: 'B'
      },
      {
        disponibility: false,
        number: 1,
        section: 'C'
      },
      {
        disponibility: false,
        number: 2,
        section: 'C'
      },
      {
        disponibility: true,
        number: 3,
        section: 'C'
      },
      {
        disponibility: false,
        number: 4,
        section: 'C'
      },
      {
        disponibility: true,
        number: 5,
        section: 'C'
      },
      {
        disponibility: true,
        number: 1,
        section: 'D'
      },
      {
        disponibility: false,
        number: 2,
        section: 'D'
      },
      {
        disponibility: true,
        number: 3,
        section: 'D'
      },
      {
        disponibility: false,
        number: 4,
        section: 'D'
      },
      {
        disponibility: true,
        number: 5,
        section: 'D'
      },
      {
        disponibility: false,
        number: 1,
        section: 'E'
      },
      {
        disponibility: false,
        number: 2,
        section: 'E'
      },
      {
        disponibility: true,
        number: 3,
        section: 'E'
      },
      {
        disponibility: false,
        number: 4,
        section: 'E'
      },
      {
        disponibility: true,
        number: 5,
        section: 'E'
      },
      {
        disponibility: true,
        number: 1,
        section: 'F'
      },
      {
        disponibility: false,
        number: 2,
        section: 'F'
      },
      {
        disponibility: true,
        number: 3,
        section: 'F'
      },
      ,
      {
        disponibility: false,
        number: 4,
        section: 'F'
      },
      {
        disponibility: true,
        number: 5,
        section: 'F'
      }
    ]

    setOptions(parking)
  }, [])

  return (
    <Home>
      <h2 className="mt-3 text-center">Disponibilidade</h2>
      <div className="d-flex justify-content-center gap-3 m-4 flex-wrap">
        <div className="align-items-center available d-flex">Disponível</div>
        <div className="align-items-center d-flex unavailable">
          Indisponível
        </div>
        <div className="align-items-center d-flex selected">
          Opção escolhida
        </div>
      </div>
      <div className="d-flex justify-content-between gap-4">
        <div className="d-flex flex-column">
          <OptionButton
            options={options}
            section={'A'}
            chosenOption={chosenOption}
            setChosenOption={setChosenOption}
          />
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column me-2">
            <OptionButton
              options={options}
              section={'B'}
              chosenOption={chosenOption}
              setChosenOption={setChosenOption}
            />
          </div>
          <div className="d-flex flex-column">
            <OptionButton
              options={options}
              section={'C'}
              chosenOption={chosenOption}
              setChosenOption={setChosenOption}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column me-2">
            <OptionButton
              options={options}
              section={'D'}
              chosenOption={chosenOption}
              setChosenOption={setChosenOption}
            />
          </div>
          <div className="d-flex flex-column">
            <OptionButton
              options={options}
              section={'E'}
              chosenOption={chosenOption}
              setChosenOption={setChosenOption}
            />
          </div>
        </div>
        <div className="d-flex flex-column">
          <OptionButton
            options={options}
            section={'F'}
            chosenOption={chosenOption}
            setChosenOption={setChosenOption}
          />
        </div>
      </div>
      <div className="buttons customer-actions flex-column h-100 gap-1">
        <button
          className="btn btn-outline-primary"
          onClick={() => saveOption()}
          disabled={chosenOption === null}
        >
          {CONSTANTS.APPLICATION_ROUTE.CONFIRM_LOT}
        </button>
        <Link className="btn primary" to="/customer">
          {CONSTANTS.APPLICATION_ROUTE.CANCEL}
        </Link>
      </div>
    </Home>
  )
}
