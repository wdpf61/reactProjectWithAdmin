import React from 'react'

const Sidebar = () => {
  return (
    <>
    
      {/* Sidenav Menu Start */}
  <div className="two-col-sidebar" id="two-col-sidebar">
    <div className="twocol-mini">
      {/* Add */}
      <div className="dropdown">
        <a className="btn btn-primary bg-gradient btn-sm btn-icon rounded-circle d-flex align-items-center justify-content-center" data-bs-toggle="dropdown" href="javascript:void(0);" role="button" data-bs-display="static" data-bs-reference="parent">
          <i className="isax isax-add" />
        </a>
        <ul className="dropdown-menu dropdown-menu-start">
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
      {/* /Add */}
      <ul className="menu-list">
        <li>
          <a href="account-settings.html" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Settings"><i className="isax isax-setting-25" /></a>
        </li>
        <li>
          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Documentation"><i className="isax isax-document-normal4" /></a>						
        </li>
        <li>
          <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Changelog"><i className="isax isax-cloud-change5" /></a>						
        </li>
        <li>
          <a href="login.html"><i className="isax isax-login-15" /></a>				
        </li>
      </ul>
    </div>
    <div className="sidebar" id="sidebar-two">
      {/* Start Logo */}
      <div className="sidebar-logo">
        <a href="index.html" className="logo logo-normal">
          <img src="/assets/img/logo.svg" alt="Logo" />
        </a>
        <a href="index.html" className="logo-small">
          <img src="/assets/img/logo-small.svg" alt="Logo" />
        </a>
        <a href="index.html" className="dark-logo">
          <img src="/assets/img/logo-white.svg" alt="Logo" />
        </a>
        <a href="index.html" className="dark-small">
          <img src="/assets/img/logo-small-white.svg" alt="Logo" />
        </a>
        {/* Sidebar Hover Menu Toggle Button */}
        <a id="toggle_btn" href="javascript:void(0);">
          <i className="isax isax-menu-1" />
        </a>
      </div>
      {/* End Logo */}
      {/* Search */}
      <div className="sidebar-search">
        <div className="input-icon-end position-relative">
          <input type="text" className="form-control" placeholder="Search" />
          <span className="input-icon-addon">
            <i className="isax isax-search-normal" />
          </span>
        </div>
      </div>
      {/* /Search */}
      {/*- Sidenav Menu */}
      <div className="sidebar-inner" data-simplebar>
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title"><span>Main</span></li>
            <li>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);" className="active subdrop">
                    <i className="isax isax-element-45" /><span>Dashboard</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="index.html" className="active">Admin Dashboard</a></li>
                    <li><a href="admin-dashboard.html">Admin Dashboard 2</a></li>
                    <li><a href="customer-dashboard.html">Customer Dashboard</a></li>
                    <li><a href="super-admin-dashboard.html">Super Admin Dashboard</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-shapes5" /><span>Super Admin</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="super-admin-dashboard.html">Dashboard</a></li>
                    <li><a href="companies.html">Companies</a></li>
                    <li><a href="subscriptions.html">Subscriptions</a></li>
                    <li><a href="packages.html">Packages</a></li>
                    <li><a href="domain.html">Domain</a></li>
                    <li><a href="purchase-transaction.html">Purchase Transaction</a></li>
                  </ul>
                </li>
                <li>
                  <a href="https://kanakku.dreamstechnologies.com/html/sass-landing/index.html">
                    <i className="isax isax-note-215" /><span>Frontend</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-category-25" /><span>Applications</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="chat.html">Chat</a></li>
                    <li className="submenu submenu-two">
                      <a href="call.html">Calls<span className="menu-arrow inside-submenu" /></a>
                      <ul>
                        <li><a href="voice-call.html">Voice Call</a></li>
                        <li><a href="video-call.html">Video Call</a></li>
                        <li><a href="outgoing-call.html">Outgoing Call</a></li>
                        <li><a href="incoming-call.html">Incoming Call</a></li>
                        <li><a href="call-history.html">Call History</a></li>
                      </ul>
                    </li>
                    <li><a href="calendar.html">Calendar</a></li>
                    <li><a href="email.html">Email</a></li>
                    <li><a href="todo.html">To Do</a></li>
                    <li><a href="notes.html">Notes</a></li>
                    <li><a href="social-feed.html">Social Feed</a></li>
                    <li><a href="file-manager.html">File Manager</a></li>
                    <li><a href="kanban-view.html">Kanban</a></li>
                    <li><a href="contacts.html">Contacts</a></li>											
                    <li><a href="invoice.html">Invoices</a></li>
                    <li><a href="search-list.html">Search List</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Inventory &amp; Sales</span></li>
            <li>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-box5" /><span>Product / Services</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="products.html">Products</a></li>
                    <li><a href="category.html">Category</a></li>
                    <li><a href="units.html">Units</a></li>
                  </ul>
                </li>
                <li>
                  <a href="inventory.html">
                    <i className="isax isax-lifebuoy5" /><span>Inventory</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-receipt-item5" /><span>Invoices</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="invoices.html">Invoices</a></li>
                    <li><a href="add-invoice.html">Create Invoice</a></li>
                    <li><a href="invoice-details.html">Invoice Details</a></li>
                    <li><a href="invoice-templates.html">Invoice Templates</a></li>
                    <li><a href="recurring-invoices.html">Recurring Invoices</a></li>
                  </ul>
                </li>
                <li>
                  <a href="credit-notes.html">
                    <i className="isax isax-note5" /><span>Credit Notes</span>
                  </a>
                </li>
                <li>
                  <a href="quotations.html">
                    <i className="isax isax-strongbox5" /><span>Quotations</span>
                  </a>
                </li>
                <li>
                  <a href="delivery-challans.html">
                    <i className="isax isax-bookmark-25" /><span>Delivery Challans</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-profile-2user5" /><span>Customers</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="customers.html">Customers</a></li>
                    <li><a href="customer-details.html">Customer Details</a></li>
                  </ul>
                </li>
              </ul>							
            </li>
            <li className="menu-title"><span>Purchases</span></li>
            <li>
              <ul>
                <li>
                  <a href="purchases.html">
                    <i className="isax isax-bag-tick-25" /><span>Purchases</span>
                  </a>
                </li>
                <li>
                  <a href="purchase-orders.html">
                    <i className="isax isax-document-forward5" /><span>Purchase Orders</span>
                  </a>
                </li>
                <li>
                  <a href="debit-notes.html">
                    <i className="isax isax-document-text5" /><span>Debit Notes</span>
                  </a>
                </li>
                <li>
                  <a href="suppliers.html">
                    <i className="isax isax-security-user5" /><span>Suppliers</span>
                  </a>
                </li>
                <li>
                  <a href="supplier-payments.html">
                    <i className="isax isax-coin-15" /><span>Supplier Payments</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Finance &amp; Accounts</span></li>
            <li>
              <ul>
                <li>
                  <a href="expenses.html">
                    <i className="isax isax-money-send5" /><span>Expenses</span>
                  </a>
                </li>
                <li>
                  <a href="incomes.html">
                    <i className="isax isax-money-recive5" /><span>Incomes</span>
                  </a>
                </li>
                <li>
                  <a href="payments.html">
                    <i className="isax isax-money-tick5" /><span>Payments</span>
                  </a>
                </li>
                <li>
                  <a href="transactions.html">
                    <i className="isax isax-moneys5" /><span>Transactions</span>
                  </a>
                </li>
                <li>
                  <a href="bank-accounts.html">
                    <i className="isax isax-card-tick-15" /><span>Bank Accounts</span>
                  </a>
                </li>
                <li>
                  <a href="money-transfer.html">
                    <i className="isax isax-convert-card5" /><span>Money Transfer</span>
                  </a>
                </li>
              </ul>
            </li>						
            <li className="menu-title"><span>Manage</span></li>
            <li>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-profile-2user5" /><span>Manage Users</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="users.html">Users</a></li>
                    <li><a href="roles-permissions.html">Roles &amp; Permissions</a></li>
                    <li><a href="delete-account-request.html">Delete Account Request</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-star-15" /><span>Membership</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="membership-plans.html">Membership Plans</a></li>
                    <li><a href="membership-addons.html">Membership Addons</a></li>
                    <li><a href="subscribers.html">Subscribers</a></li>
                    <li><a href="membership-transactions.html">Transactions</a></li>
                  </ul>
                </li>
                <li>
                  <a href="contact-messages.html">
                    <i className="isax isax-messages-25" /><span>Contact Messages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-ticket-25" /><span>Tickets</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="tickets.html">Ticket Lists</a></li>
                    <li><a href="ticket-kanban.html">Ticket Kanban</a></li>
                    <li><a href="ticket-details.html">Ticket Details</a></li>
                  </ul>
                </li>
              </ul>
            </li>			
            <li className="menu-title"><span>Administration</span></li>
            <li>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-chart-35" /><span>Reports</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Item Reports<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="stock-summary.html">Stock Summary</a></li>
                        <li><a href="inventory-report.html">Inventory</a></li>
                        <li><a href="best-seller.html">Best Seller</a></li>
                        <li><a href="low-stock.html">Low Stock</a></li>
                        <li><a href="stock-history.html">Stock History</a></li>
                        <li><a href="sold-stock.html">Sold Stock</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Transaction Reports<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="sales-report.html">Sales</a></li>
                        <li><a href="sales-returns.html">Sales Return</a></li>
                        <li><a href="sales-orders.html">Sales Orders</a></li>
                        <li><a href="purchases-report.html">Purchases</a></li>
                        <li><a href="purchase-return-report.html">Purchase Return</a></li>
                        <li><a href="purchase-orders-report.html">Purchase Orders</a></li>
                        <li><a href="quotation-report.html">Quotation</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Finance Reports<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="payment-summary.html">Payment Summary</a></li>
                        <li><a href="tax-report.html">Taxes</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Accounting Reports<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="expense-report.html">Expenses</a></li>
                        <li><a href="income-report.html">Income</a></li>
                        <li><a href="profit-loss-report.html">Profit &amp; Loss</a></li>
                        <li><a href="annual-report.html">Annual Report</a></li>
                        <li><a href="balance-sheet.html">Balance Sheet</a></li>
                        <li><a href="trial-balance.html">Trial Balance</a></li>
                        <li><a href="cash-flow.html">Cash Flow</a></li>
                        <li><a href="account-statement.html">Account Statement</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">User Reports<span className="menu-arrow" /></a>
                      <ul>
                        <li>
                          <a href="customers-report.html">Customers</a>
                        </li>
                        <li>
                          <a href="customer-due-report.html">Customer Due Report</a>
                        </li>
                        <li>
                          <a href="supplier-report.html">Supplier</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-setting-25" /><span>Settings</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">General Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="account-settings.html">Account Settings</a></li>
                        <li><a href="plans-billings.html">Plans &amp; Billing</a></li>
                        <li><a href="notifications-settings.html">Notifications</a></li>
                        <li><a href="integrations-settings.html">Integrations</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Website Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="company-settings.html">Company Settings</a></li>
                        <li><a href="localization-settings.html">Localization</a></li>
                        <li><a href="preference-settings.html">Preference</a></li>
                        <li><a href="seo-setup.html">SEO Setup</a></li>
                        <li><a href="language-settings.html">Language</a></li>
                        <li><a href="maintenance-mode.html">Maintenance Mode</a></li>
                        <li><a href="authentication-settings.html">Authentication</a></li>
                        <li><a href="ai-configuration.html">AI Configuration</a></li>
                        <li><a href="appearance-settings.html">Appearance</a></li>
                        <li><a href="plugin-manager.html">Plugin Manager</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">App Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="invoice-settings.html">Invoice Settings</a></li>
                        <li><a href="invoice-templates-settings.html">Invoice Templates</a></li>
                        <li><a href="esignatures.html">eSignatures</a></li>
                        <li><a href="barcode-settings.html">Barcode</a></li>
                        <li><a href="thermal-printer.html">Thermal Printer</a></li>
                        <li><a href="custom-fields.html">Custom Fields</a></li>
                        <li><a href="sass-settings.html">SaaS Settings</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">System Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li><a href="email-settings.html">Email Settings</a></li>
                        <li><a href="email-templates.html">Email Templates</a></li>
                        <li><a href="sms-gateways.html">SMS Gateways</a></li>
                        <li><a href="gdpr-cookies.html">GDPR Cookies</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Finance Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li>
                          <a href="payment-methods.html">Payment Methods</a>
                        </li>
                        <li>
                          <a href="bank-accounts.html">Bank Accounts</a>
                        </li>
                        <li>
                          <a href="tax-rates.html">Tax Rates</a>
                        </li>
                        <li>
                          <a href="currencies.html">Currencies</a>
                        </li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Other Settings<span className="menu-arrow" /></a>
                      <ul>
                        <li>
                          <a href="custom-css.html">Custom CSS</a>
                        </li>
                        <li>
                          <a href="custom-js.html">Custom JS</a>
                        </li>
                        <li>
                          <a href="clear-cache.html">Clear Cache</a>
                        </li>
                        <li>
                          <a href="sitemap.html">Sitemap</a>
                        </li>
                        <li>
                          <a href="storage.html">Storage</a>
                        </li>
                        <li>
                          <a href="cronjob.html">Cronjob</a>
                        </li>
                        <li>
                          <a href="system-backup.html">System Backup</a>
                        </li>
                        <li>
                          <a href="database-backup.html">Database Backup</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Layout</span></li>
            <li>
              <ul>
                <li>
                  <a href="layout-default.html">
                    <i className="isax isax-row-horizontal5" /><span>Default</span>
                  </a>
                </li>
                <li>
                  <a href="layout-single.html">
                    <i className="isax isax-grid-95" /><span>Single</span>
                  </a>
                </li>
                <li>
                  <a href="layout-mini.html">
                    <i className="isax isax-grid-45" /><span>Mini</span>
                  </a>
                </li>
                <li>
                  <a href="layout-transparent.html">
                    <i className="isax isax-grid-25" /><span>Transparent</span>
                  </a>
                </li>
                <li>
                  <a href="layout-without-header.html">
                    <i className="isax isax-slider-vertical-15" /><span>Without Header</span>
                  </a>
                </li>
                <li>
                  <a href="layout-rtl.html">
                    <i className="isax isax-sidebar-left5" /><span>RTL</span>
                  </a>
                </li>
                <li>
                  <a href="layout-dark.html">
                    <i className="isax isax-moon5" /><span>Dark</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Content</span></li>
            <li>
              <ul>
                <li>
                  <a href="pages.html">
                    <i className="isax isax-document-15" /><span>Pages</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-book5" /><span>Blogs</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="blogs.html">All Blogs</a></li>
                    <li><a href="blog-categories.html">Categories</a></li>
                    <li><a href="blog-tags.html">Blog Tags</a></li>
                    <li><a href="blog-comments.html">Comments</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-map5" /><span>Locations</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="countries.html">Countries</a></li>
                    <li><a href="states.html">States</a></li>
                    <li><a href="cities.html">Cities</a></li>
                  </ul>
                </li>
                <li>
                  <a href="testimonials.html">
                    <i className="isax isax-messages-15" /><span>Testimonials</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i className="isax isax-message-question5" /><span>FAQ’S</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Pages</span></li>
            <li>
              <ul>
                <li>
                  <a href="profile.html">
                    <i className="isax isax-profile-tick5" /><span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="starter.html">
                    <i className="isax isax-document-favorite5" /><span>Starter Page</span>
                  </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <i className="isax isax-image5" /><span>Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="pricing.html">
                    <i className="isax isax-money-45" /><span>Pricing</span>
                  </a>
                </li>
                <li>
                  <a href="timeline.html">
                    <i className="isax isax-timer-pause5" /><span>Timeline</span>
                  </a>
                </li>
                <li>
                  <a href="coming-soon.html">
                    <i className="isax isax-security-time5" /><span>Coming Soon</span>
                  </a>
                </li>
                <li>
                  <a href="under-maintenance.html">
                    <i className="isax isax-paintbucket5" /><span>Under Maintenance</span>
                  </a>
                </li>
                <li>
                  <a href="under-construction.html">
                    <i className="isax isax-forward-item5" /><span>Under Construction</span>
                  </a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-device-message5" /><span>Error Pages</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="error-404.html">Error 404</a></li>
                    <li><a href="error-500.html">Error 500</a></li>
                  </ul>
                </li>
                <li>
                  <a href="api-keys.html">
                    <i className="isax isax-key-square5" /><span>API Keys</span>
                  </a>
                </li>
                <li>
                  <a href="privacy-policy.html">
                    <i className="isax isax-document-copy5" /><span>Privacy Policy</span>
                  </a>
                </li>
                <li>
                  <a href="terms-condition.html">
                    <i className="isax isax-note-15" /><span>Terms &amp; Conditions</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Authentication</span></li>
            <li>
              <ul>
                <li>
                  <a href="login.html">
                    <i className="isax isax-login-15" /><span>Login</span>
                  </a>
                </li>
                <li>
                  <a href="register.html">
                    <i className="isax isax-lock-15" /><span>Register</span>
                  </a>
                </li>
                <li>
                  <a href="forgot-password.html">
                    <i className="isax isax-password-check5" /><span>Forgot Password</span>
                  </a>
                </li>
                <li>
                  <a href="reset-password.html">
                    <i className="isax isax-refresh-right-square5" /><span>Reset Password</span>
                  </a>
                </li>
                <li>
                  <a href="email-verification.html">
                    <i className="isax isax-sms-tracking5" /><span>Email Verification</span>
                  </a>
                </li>
                <li>
                  <a href="two-step-verification.html">
                    <i className="isax isax-security5" /><span>2 Step Verification</span>
                  </a>
                </li>
                <li>
                  <a href="lock-screen.html">
                    <i className="isax isax-lock-circle5" /><span>Lock Screen</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>UI Interface</span></li>
            <li>
              <ul>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-designtools5" /><span>Base UI</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="ui-accordion.html">Accordion</a></li>
                    <li><a href="ui-alerts.html">Alerts</a></li>
                    <li><a href="ui-avatar.html">Avatar</a></li>
                    <li><a href="ui-badges.html">Badges</a></li>
                    <li><a href="ui-breadcrumb.html">Breadcrumb</a></li>
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-buttons-group.html">Button Group</a></li>
                    <li><a href="ui-cards.html">Card</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                    <li><a href="ui-collapse.html">Collapse</a></li>
                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                    <li><a href="ui-ratio.html">Ratio</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                    <li><a href="ui-images.html">Images</a></li>
                    <li><a href="ui-links.html">Links</a></li>
                    <li><a href="ui-list-group.html">List Group</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-offcanvas.html">Offcanvas</a></li>
                    <li><a href="ui-pagination.html">Pagination</a></li>
                    <li><a href="ui-placeholders.html">Placeholders</a></li>
                    <li><a href="ui-popovers.html">Popovers</a></li>
                    <li><a href="ui-progress.html">Progress</a></li>
                    <li><a href="ui-scrollspy.html">Scrollspy</a></li>
                    <li><a href="ui-spinner.html">Spinner</a></li>
                    <li><a href="ui-nav-tabs.html">Tabs</a></li>
                    <li><a href="ui-toasts.html">Toasts</a></li>
                    <li><a href="ui-tooltips.html">Tooltips</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-utilities.html">Utilities</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-pen-tool5" /><span>Advanced UI</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="extended-dragula.html">Dragula</a></li>
                    <li><a href="ui-clipboard.html">Clipboard</a></li>
                    <li><a href="ui-rangeslider.html">Range Slider</a></li>
                    <li><a href="ui-sweetalerts.html">Sweet Alerts</a></li>
                    <li><a href="ui-lightbox.html">Lightbox</a></li>
                    <li><a href="ui-rating.html">Rating</a></li>
                    <li><a href="ui-counter.html">Counter</a></li>
                    <li><a href="ui-scrollbar.html">Scrollbar</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-password-check5" /><span>Forms</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Form Elements<span className="menu-arrow inside-submenu" /></a>
                      <ul>
                        <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                        <li><a href="form-checkbox-radios.html">Checkbox &amp; Radios</a></li>
                        <li><a href="form-input-groups.html">Input Groups</a></li>
                        <li><a href="form-grid-gutters.html">Grid &amp; Gutters</a></li>
                        <li><a href="form-mask.html">Input Masks</a></li>
                        <li><a href="form-fileupload.html">File Uploads</a></li>
                      </ul>
                    </li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Layouts<span className="menu-arrow inside-submenu" /></a>
                      <ul>
                        <li><a href="form-horizontal.html">Horizontal Form</a></li>
                        <li><a href="form-vertical.html">Vertical Form</a></li>
                        <li><a href="form-floating-labels.html">Floating Labels</a></li>
                      </ul>
                    </li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-select2.html">Select2</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-pickers.html">Form Picker</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-grid-75" /><span>Tables</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="tables-basic.html">Basic Tables </a></li>
                    <li><a href="data-tables.html">Data Table </a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-designtools5" />
                    <span>Charts</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="chart-apex.html">Apex Charts</a></li>
                    <li><a href="chart-c3.html">Chart C3</a></li>
                    <li><a href="chart-js.html">Chart Js</a></li>
                    <li><a href="chart-morris.html">Morris Charts</a></li>
                    <li><a href="chart-flot.html">Flot Charts</a></li>
                    <li><a href="chart-peity.html">Peity Charts</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-shapes-15" />
                    <span>Icons</span><span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                    <li><a href="icon-tabler.html">Tabler Icons</a></li>
                    <li><a href="icon-bootstrap.html">Bootstrap Icons</a></li>
                    <li><a href="icon-remix.html">Remix Icons</a></li>
                    <li><a href="icon-feather.html">Feather Icons</a></li>
                    <li><a href="icon-ionic.html">Ionic Icons</a></li>
                    <li><a href="icon-material.html">Material Icons</a></li>
                    <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                    <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                    <li><a href="icon-themify.html">Themify Icons</a></li>
                    <li><a href="icon-weather.html">Weather Icons</a></li>
                    <li><a href="icon-typicon.html">Typicon Icons</a></li>
                    <li><a href="icon-flag.html">Flag Icons</a></li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-map-15" />
                    <span>Maps</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li>
                      <a href="maps-vector.html">Vector</a>
                    </li>
                    <li>
                      <a href="maps-leaflet.html">Leaflet</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-title"><span>Help</span></li>
            <li>
              <ul>
                <li>
                  <a href="javascript:void(0);"><i className="isax isax-document-code-25" /><span>Documentation</span></a>
                </li>
                <li>
                  <a href="javascript:void(0);"><i className="isax isax-programming-arrows5" /><span>Changelog</span><span className="badge bg-primary ms-2 badge-sm text-white fs-12 fw-medium">v2.0.7</span></a>
                </li>
                <li className="submenu">
                  <a href="javascript:void(0);">
                    <i className="isax isax-layer5" /><span>Multi Level</span>
                    <span className="menu-arrow" />
                  </a>
                  <ul>
                    <li><a href="javascript:void(0);">Multilevel 1</a></li>
                    <li className="submenu submenu-two">
                      <a href="javascript:void(0);">Multilevel 2<span className="menu-arrow inside-submenu" /></a>
                      <ul>
                        <li><a href="javascript:void(0);">Multilevel 2.1</a></li>
                        <li className="submenu submenu-two submenu-three">
                          <a href="javascript:void(0);">Multilevel 2.2<span className="menu-arrow inside-submenu inside-submenu-two" /></a>
                          <ul>
                            <li><a href="javascript:void(0);">Multilevel 2.2.1</a></li>
                            <li><a href="javascript:void(0);">Multilevel 2.2.2</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0);">Multilevel 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className="sidebar-footer">
            <div className="trial-item bg-white text-center border">
              <div className="bg-light p-3 text-center">
                <img src="/assets/img/icons/upgrade.svg" alt="img" />
              </div>
              <div className="p-2">
                <h6 className="fs-14 fw-semibold mb-1">Upgrade to More</h6>
                <p className="fs-13 mb-2">Subscribe to get more with Premium Features</p>
                <a href="plans-billings.html" className="btn btn-sm btn-primary w-100 d-flex align-items-center justify-content-center"><i className="isax isax-crown5 me-1" />Upgrade</a>
              </div>
              <a href="javascript:void(0);" className="close-icon"><i className="fa-solid fa-x" /></a>
            </div>
            <ul className="menu-list">
              <li>
                <a href="account-settings.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Settings"><i className="isax isax-setting-25" /></a>
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Documentation"><i className="isax isax-document-normal4" /></a>						
              </li>
              <li>
                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Changelog"><i className="isax isax-cloud-change5" /></a>						
              </li>
              <li>
                <a href="login.html" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Login"><i className="isax isax-login-15" /></a>				
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Sidenav Menu End */}
    
    </>
  )
}

export default Sidebar