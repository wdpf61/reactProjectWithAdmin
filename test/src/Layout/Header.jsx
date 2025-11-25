import React from 'react'

const Header = () => {
  return (
    <>
    
      {/* Topbar Start */}
  <div className="header">						
    <div className="main-header">
      {/* Logo */}
      <div className="header-left">
        <a href="index.html" className="logo">
          <img src="/assets/img/logo.svg" alt="Logo" />
        </a>
        <a href="index.html" className="dark-logo">
          <img src="/assets/img/logo-white.svg" alt="Logo" />
        </a>
      </div>
      {/* Sidebar Menu Toggle Button */}
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      <div className="header-user">
        <div className="nav user-menu nav-list">	
          <div className="me-auto d-flex align-items-center" id="header-search">	
            {/* Add */}
            <div className="dropdown me-3">
              <a className="btn btn-primary bg-gradient btn-xs btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                <i className="isax isax-add text-white" />
              </a>
              <ul className="dropdown-menu dropdown-menu-start p-2">
                <li>
                  <a href="add-invoice.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-document-text-1 me-2" />Invoice
                  </a>
                </li>
                <li>
                  <a href="expenses.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-money-send me-2" />Expense
                  </a>
                </li>
                <li>
                  <a href="add-credit-notes.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-money-add me-2" />Credit Notes
                  </a>
                </li>
                <li>
                  <a href="add-debit-notes.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-money-recive me-2" />Debit Notes
                  </a>
                </li>
                <li>
                  <a href="add-purchases-orders.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-document me-2" />Purchase Order
                  </a>
                </li>
                <li>
                  <a href="add-quotation.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-document-download me-2" />Quotation
                  </a>
                </li>
                <li>
                  <a href="add-delivery-challan.html" className="dropdown-item d-flex align-items-center">
                    <i className="isax isax-document-forward me-2" />Delivery Challan
                  </a>
                </li>
              </ul>
            </div>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-divide mb-0">
                <li className="breadcrumb-item d-flex align-items-center"><a href="index.html"><i className="isax isax-home-2 me-1" />Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
              </ol>
            </nav>	
          </div>
          <div className="d-flex align-items-center">	
            {/* Search */}
            <div className="input-icon-end position-relative me-2">
              <input type="text" className="form-control" placeholder="Search" />
              <span className="input-icon-addon">
                <i className="isax isax-search-normal" />
              </span>
            </div>
            {/* /Search */}
            {/* Language Dropdown */}
            <div className="nav-item dropdown has-arrow flag-nav me-2">
              <a className="btn btn-menubar" data-bs-toggle="dropdown" href="javascript:void(0);" role="button">
                <img src="../assets/img/flags/us.svg" alt="Language" className="img-fluid" />
              </a>
              <ul className="dropdown-menu p-2">
                {/* item*/}
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src="../assets/img/flags/us.svg" alt="flag" className="me-2" />English
                  </a>
                </li>
                {/* item*/}
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src="../assets/img/flags/de.svg" alt="flag" className="me-2" />German
                  </a>
                </li>
                {/* item*/}
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src="../assets/img/flags/fr.svg" alt="flag" className="me-2" />French
                  </a>
                </li>
                {/* item*/}
                <li>
                  <a href="javascript:void(0);" className="dropdown-item">
                    <img src="../assets/img/flags/ae.svg" alt="flag" className="me-2" />Arabic
                  </a>
                </li>
              </ul>
            </div>
            {/* Notification */}
            <div className="notification_item me-2">
              <a href="#" className="btn btn-menubar position-relative" id="notification_popup" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <i className="isax isax-notification-bing5" />
                <span className="position-absolute badge bg-success border border-white" />
              </a>
              <div className="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" style={{minHeight: 300}}>
                <div className="p-2 border-bottom">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0 fs-16 fw-semibold"> Notifications</h6>
                    </div>
                    <div className="col-auto">
                      <div className="dropdown">
                        <a href="#" className="dropdown-toggle drop-arrow-none link-dark" data-bs-toggle="dropdown" data-bs-offset="0,15" aria-expanded="false">
                          <i className="isax isax-setting-2 fs-16 text-body align-middle" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-bell-check me-1" />Mark as Read</a>
                          {/* item*/}
                          <a href="javascript:void(0);" className="dropdown-item"><i className="ti ti-trash me-1" />Delete All</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Notification Dropdown */}
                <div className="notification-body position-relative z-2 rounded-0" data-simplebar>
                  {/* Item*/}
                  <div className="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-1">
                    <div className="d-flex">
                      <div className="me-2 position-relative flex-shrink-0">
                        {/*  */}
                        <img className="avatar-md rounded-circle" alt="User Img" data-cfsrc="../assets/img/profiles/avatar-05.jpg" style={{display: 'none', visibility: 'hidden'}} /><noscript>&lt;img src="/assets/img/profiles/avatar-05.jpg" class="avatar-md rounded-circle" alt="User Img"&gt;</noscript>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-semibold text-dark">John Smith</p>
                        <p className="mb-1 text-wrap fs-14">
                          A <span className="fw-semibold">new sale</span> has been recorded.
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="isax isax-clock me-1" />4 min ago</span>
                          <div className="notification-action d-flex align-items-center float-end gap-2">
                            <a href="javascript:void(0);" className="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title data-bs-original-title="Make as Read" aria-label="Make as Read" />
                            <button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-1">
                              <i className="isax isax-close-circle fs-12" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item*/}
                  <div className="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-2">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avatar-sm me-2">
                          <span className="avatar-title bg-soft-info text-info fs-18 rounded-circle">
                            D
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-semibold text-dark">Donoghue Susan</p>
                        <p className="mb-0 text-wrap fs-14">
                          Switched to a lower-tier package
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="isax isax-clock me-1" />4 min ago</span>
                          <div className="notification-action d-flex align-items-center float-end gap-2">
                            <a href="javascript:void(0);" className="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title data-bs-original-title="Make as Read" aria-label="Make as Read" />
                            <button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-2">
                              <i className="isax isax-close-circle fs-12" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item*/}
                  <div className="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-3">
                    <div className="d-flex">
                      <div className="me-2 position-relative flex-shrink-0">
                        <img className="avatar-md rounded-circle" alt="User Img" data-cfsrc="/assets/img/profiles/avatar-03.jpg" style={{display: 'none', visibility: 'hidden'}} /><noscript>&lt;img src="/assets/img/profiles/avatar-03.jpg" class="avatar-md rounded-circle" alt="User Img"&gt;</noscript>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-semibold text-dark">Robert Fox </p>
                        <p className="mb-1 text-wrap fs-14">
                          Completed payment for <span className="fw-semibold">#INV00025</span>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="isax isax-clock me-1" />4 min ago</span>
                          <div className="notification-action d-flex align-items-center float-end gap-2">
                            <a href="javascript:void(0);" className="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title data-bs-original-title="Make as Read" aria-label="Make as Read" />
                            <button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-3">
                              <i className="isax isax-close-circle fs-12" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item*/}
                  <div className="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-4">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <div className="avatar-sm me-2">
                          <span className="avatar-title bg-soft-warning text-warning fs-18 rounded-circle">
                            <i className="isax isax-message" />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 text-wrap fs-14">You have received <span className="fw-semibold">20</span> new messages in the conversation</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="isax isax-clock me-1" />3 min ago</span>
                          <div className="notification-action d-flex align-items-center float-end gap-2">
                            <a href="javascript:void(0);" className="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title data-bs-original-title="Make as Read" aria-label="Make as Read" />
                            <button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-4">
                              <i className="isax isax-close-circle fs-12" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Item*/}
                  <div className="dropdown-item notification-item py-2 text-wrap border-bottom" id="notification-5">
                    <div className="d-flex">
                      <div className="me-2 position-relative flex-shrink-0">
                        <img className="avatar-md rounded-circle" alt="User Img" data-cfsrc="/assets/img/profiles/avatar-17.jpg" style={{display: 'none', visibility: 'hidden'}} /><noscript>&lt;img src="/assets/img/profiles/avatar-17.jpg" class="avatar-md rounded-circle" alt="User Img"&gt;</noscript>
                      </div>
                      <div className="flex-grow-1">
                        <p className="mb-0 fw-semibold text-dark">Charlotte Brown</p>
                        <p className="mb-1 text-wrap fs-14">
                          New invoice generated <span className="fw-semibold"> #INV00028</span>
                        </p>
                        <div className="mb-1">
                          <a className="badge bg-success p-2 py-1 me-1" href="#">Approve</a>
                          <a className="badge bg-danger p-2 py-1" href="#">Deny</a>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="fs-12"><i className="isax isax-clock me-1" />45 min ago</span>
                          <div className="notification-action d-flex align-items-center float-end gap-2">
                            <a href="javascript:void(0);" className="notification-read rounded-circle bg-info" data-bs-toggle="tooltip" title data-bs-original-title="Make as Read" aria-label="Make as Read" />
                            <button className="btn rounded-circle text-danger p-0" data-dismissible="#notification-5">
                              <i className="isax isax-close-circle fs-12" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View All*/}
                <div className="p-2 rounded-bottom border-top text-center">
                  <a href="notifications.html" className="text-center fw-medium fs-14 mb-0">
                    View All
                  </a>
                </div>
              </div>
            </div>
            {/* Light/Dark Mode Button */}
            <div className="me-2 theme-item">
              <a href="javascript:void(0);" id="dark-mode-toggle" className="theme-toggle btn btn-menubar">
                <i className="isax isax-moon" />
              </a>
              <a href="javascript:void(0);" id="light-mode-toggle" className="theme-toggle btn btn-menubar">
                <i className="isax isax-sun-1" />
              </a>
            </div>
            {/* User Dropdown */}
            <div className="dropdown profile-dropdown">
              <a href="javascript:void(0);" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
                <span className="avatar online">
                  <img alt="Img" src="../assets/img/profiles/avatar-01.jpg" className="img-fluid rounded-circle" data-cfsrc="../assets/img/profiles/avatar-01.jpg" style={{display: 'visible', visibility: 'visible'}} /><noscript>&lt;img  alt="Img" class="img-fluid rounded-circle"&gt;</noscript>
                </span>
              </a>
              <div className="dropdown-menu p-2">
                <div className="d-flex align-items-center bg-light rounded-1 p-2 mb-2">
                  <span className="avatar avatar-lg me-2">
                    <img alt="img" src="../assets/img/profiles/avatar-01.jpg" className="rounded-circle" data-cfsrc="../assets/img/profiles/avatar-01.jpg" style={{display: 'visible', visibility:'visible'}} /><noscript>&lt; img  alt="img" class="rounded-circle" &gt;</noscript>
                  </span>
                  <div>
                    <h6 className="fs-14 fw-medium mb-1">Jafna Cremson</h6>
                    <p className="fs-13">Administrator</p>
                  </div>
                </div>
                {/* Item*/}
                <a className="dropdown-item d-flex align-items-center" href="account-settings.html">
                  <i className="isax isax-profile-circle me-2" />Profile Settings
                </a>
                {/* Item*/}
                <a className="dropdown-item d-flex align-items-center" href="inventory-report.html">
                  <i className="isax isax-document-text me-2" />Reports
                </a>
                {/* Item*/}
                <div className="form-check form-switch form-check-reverse d-flex align-items-center justify-content-between dropdown-item mb-0">
                  <label className="form-check-label" htmlFor="notify"><i className="isax isax-notification me-2" />Notifications</label>
                  <input className="form-check-input" type="checkbox" role="switch" id="notify" />
                </div>
                <hr className="dropdown-divider my-2" />
                {/* Item*/}
                <a className="dropdown-item logout d-flex align-items-center" href="login.html">
                  <i className="isax isax-logout me-2" />Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu profile-dropdown">
        <a href="javascript:void(0);" className="dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" data-bs-auto-close="outside">
          <span className="avatar avatar-md online">
            <img alt="Img" className="img-fluid rounded-circle" data-cfsrc="../assets/img/profiles/avatar-01.jpg" style={{display: 'none', visibility: 'hidden'}} /><noscript>&lt;img src="../assets/img/profiles/avatar-01.jpg" alt="Img" class="img-fluid rounded-circle"&gt;</noscript>
          </span>
        </a>
        <div className="dropdown-menu p-2 mt-0">
          <a className="dropdown-item d-flex align-items-center" href="profile.html">
            <i className="isax isax-profile-circle me-2" />Profile Settings
          </a>
          <a className="dropdown-item d-flex align-items-center" href="reports.html">
            <i className="isax isax-document-text me-2" />Reports
          </a>
          <a className="dropdown-item d-flex align-items-center" href="account-settings.html">
            <i className="isax isax-setting me-2" />Settings
          </a>
          <a className="dropdown-item logout d-flex align-items-center" href="login.html">
            <i className="isax isax-logout me-2" />Signout
          </a>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
  </div>
  {/* Topbar End */}
    
    
    </>
  )
}

export default Header