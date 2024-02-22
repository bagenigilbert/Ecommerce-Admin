import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";

function Dashboard() {
  return (
    <div>
    <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1500</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
            <BsArrowDownRight /> 35%
            </h6>
            <p className="mb-0  desc">Compared To February 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1500</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
            <BsArrowDownRight /> 35%
            </h6>
            <p className="mb-0  desc">Compared To February 2024</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1500</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
            <BsArrowDownRight />35%
            </h6>
            <p className="mb-0 desc">Compared To February 2024</p>
          </div>
        </div>
      </div>
      </div>
   
     )
}

export default Dashboard