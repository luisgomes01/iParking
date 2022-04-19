import "./home.scss";

import { CONSTANTS } from "../../utils/constants";
import React from "react";
import logo from "../../assets/iparking-logo.svg";

export default function Home() {
  return (
    <main className="container-fluid d-flex p-0 home">
      <section className="container-fluid d-flex justify-content-end left-container">
        <div className="d-flex flex-column h-100 justify-content-center left-container-items mx-sm-3 w-75">
          <img className="logo" alt="logo.svg" src={logo} />
          <h2 className="text-left text-white w-75">
            {CONSTANTS.PARK_WAS_NEVER_THAT_EASY}
          </h2>
        </div>
      </section>
      <section className="container-fluid right-container">
        <div className="align-items-center d-flex flex-column gap-2 h-100 justify-content-center right-container-content">
          <div className="right-container-title">
            <h2>{CONSTANTS.ACCESS_AS}</h2>
          </div>
          <div className="d-grid gap-3 col-lg-6 right-container-body">
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
