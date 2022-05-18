import React from 'react'
import AdminNav from '../../Components/AdminNav'

export default function index() {
  return (
    <div>
      <AdminNav />
      <section className='pt-100'>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Total number of Insurances</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <br/>
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
