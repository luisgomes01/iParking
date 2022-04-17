import React from "react";

import logo from "../../assets/iparking-logo.svg";
import { CONSTANTS } from "../../utils/constants";
import "./home.scss";

export default function Home() {
  return (
    <main className="container-fluid d-flex p-0 home">
      <section className="justify-content-end container-fluid d-flex left-container">
        <div className="d-flex flex-column h-100 justify-content-center left-container-items w-75">
          <img
            className="logo position-absolute"
            alt="logo.svg"
            height={80}
            src={logo}
            width={275}
          />
          <h2 className="text-left text-white w-75">
            {CONSTANTS.PARK_WAS_NEVER_THAT_EASY}
          </h2>
        </div>
      </section>
      <section className="container-fluid right-container">
        <div className="align-items-center d-flex flex-column gap-2 justify-content-center right-container-content">
          <div className="right-container-title">
            <h2>{CONSTANTS.ACCESS_AS}</h2>
          </div>
          <div className="d-grid gap-3 col-6 mx-auto right-container-body">
            <button type="button" className="btn btn-outline-dark">
              <span className="align-middle w-100 h-100">
                {CONSTANTS.ADMIN}
              </span>
            </button>
            <button type="button" className="btn btn-outline-primary mt-2">
              <span className="align-middle w-100 h-100">
                {CONSTANTS.CUSTOMER}
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
