import './PaymentCode.scss'

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import barcode from '../../../assets/barcode.svg'
import { CONSTANTS } from '../../../utils/constants'
import Home from '../../home/Home'

export default function PaymentCode() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const [exitTime, setExitTime] = useState("--:--");
  const [entryTime, setEntryTime] = useState();

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [running]);
  
  useEffect(() => {
    let today = new Date();
    setEntryTime(today.getHours() + ":" + (today.getMinutes()<10?'0':'')+ today.getMinutes());
  }, [])

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              Pagamento feito com sucesso!
            </div>
          </div>
        </div>
      </div>
      <Home>
        <section className="d-flex align-items-center justify-content-between flex-column gap-2">
          <div className="payment-code-title mb-4">
            <h2 className="pt-3">Código de barras</h2>
          </div>
          <div>
            <img src={barcode} alt="Generated barcode." />
          </div>
          <div className="information d-flex align-items-center flex-column mt-4">
            <p>
              Entrada: <span>{entryTime}</span>
            </p>
            <p>
              Saída: <span>{exitTime}</span>
            </p>
            <p>
              Permanência: <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
                          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            </p>
            <p>
              Valor: <span>R$XX,XX</span>
            </p>
          </div>
          <div className="buttons customer-actions flex-column h-100 gap-1">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                setExitTime(new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'}))
                setRunning(false)
              }}
              data-bs-toggle="modal" data-bs-target="#exampleModal"
            >
              {CONSTANTS.APPLICATION_ROUTE.PAYMENT}
            </button>
            <Link to="/" className="btn primary">
              {CONSTANTS.APPLICATION_ROUTE.CANCEL}
            </Link>
          </div>
        </section>
      </Home>
    </>
  )
}

export const Modal = () => {
    return (
    <>
        
    </>
    )
}
