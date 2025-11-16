import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import RoleList from '../pages/roles/RoleList'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const Layout = () => {
  return (
   <>
    
         
<div className="main-wrapper">		
   <Header/>
   <Sidebar/>
  {/* ========================
			Start Page Content
		========================= */}
  <div className="page-wrapper">
     <div className="content">
      <Outlet/>

     </div>
       

        <Footer/>
  </div>
  {/* ========================
			End Page Content
		========================= */}
  {/* Start Add Ledger  */}
  <div id="add_ledger" className="modal fade">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add New Ledger</h4>
          <button type="button" className="btn-close btn-close-modal custom-btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="fa-solid fa-x" /></button>
        </div>
        <form action="https://kanakku.dreamstechnologies.com/html/template/index.html">
          <div className="modal-body pb-1">
            <div className="mb-3">
              <label className="form-label">Amount</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <div className="input-group position-relative">
                <input type="text" className="form-control datetimepicker rounded-end" placeholder="dd/mm/yyyy" />
                <span className="input-icon-addon fs-16 text-gray-9">
                  <i className="isax isax-calendar-2" />
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Mode</label>
              <div className="d-flex align-items-center">
                <div className="form-check me-3">
                  <input className="form-check-input" type="radio" name="Radio" id="Radio-sm-1" />
                  <label className="form-check-label" htmlFor="Radio-sm-1">
                    Credit
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="Radio" id="Radio-sm-2" defaultChecked />
                  <label className="form-check-label" htmlFor="Radio-sm-2">
                    Debit
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex align-items-center justify-content-between gap-1">
            <button type="button" className="btn btn-outline-white" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-primary">Create</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* End Add Ledger */}
</div>

          
   
   </>
  )
}

export default Layout