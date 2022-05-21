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
                  <h5 className="card-title">Insurance Members</h5>
                  <p className="card-text">Number of members applied for insurance</p>
                  <a href="/admin/allinsurances" className="btn btn-primary">Members</a>
                </div>
              </div>
            </div>
            
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Applied Claims</h5>
                  <p className="card-text">Members applied for claim but not approved by admin</p>
                  <a href="/admin/approveclaim" className="btn btn-primary">Claims</a>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <br/>
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Voting</h5>
                  <p className="card-text">Claims that are under voting process</p>
                  <a href="/admin/votingclaim" className="btn btn-primary">Vote</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card card bg-light w-75" style={{width: "18rem"}}>
                <div className="card-body">
                  <h5 className="card-title">Claims Completed</h5>
                  <p className="card-text">Claims applied by members and are completed</p>
                  <a href="/admin/completeclaim" className="btn btn-primary">Complete Claims</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
