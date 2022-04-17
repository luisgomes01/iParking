import React from "react";

import logo from "../../assets/iparking-logo.svg";
import { CONSTANTS } from "../../utils/constants";
import "./home.scss";

export default function Home() {
  return (
    <main className="container-fluid d-flex p-0 home">
      <section className="container-fluid left-container">
        <div className="align-items-center d-flex flex-column gap-5 h-75 justify-content-center left-container-items mb-5 px-md-3 px-sm-3 w-100">
          <img
            className="logo"
            alt="logo.svg"
            height={80}
            src={logo}
            width={275}
          />
          <h2 className="text-left text-white">
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
            <button type="button" className="btn btn-outline-dark btn-lg">
              <span className="align-middle w-100 h-100">
                {CONSTANTS.ADMIN}
              </span>
            </button>
            <button type="button" className="btn btn-outline-primary btn-lg">
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
