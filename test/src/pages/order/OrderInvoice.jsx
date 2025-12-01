import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./invoice.css";

const OrderInvoice = () => {

    const invoiceRef = useRef();

    const handlePrint = () => {
        window.print();
    };

    const [order, setOrder] = useState({})
    const [customer, setCustomer] = useState({})
    const [orderDetails, setOrderDetails] = useState([])

    const { id } = useParams();

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    function fetchOrderInvoice() {
        axios(
            {
                url: `${baseUrl}/order/orderInvoice/${id}`,
                method: "GET",
                data: {}
            }
        )
            .then(res => {
                console.log(res.data);
                setOrder(res.data.order)
                setOrderDetails(res.data.order_details)
                setCustomer(res.data.customer)

            })
            .catch(err => {
                console.log(err.data);
            })
    }


    useEffect(() => {
        fetchOrderInvoice()
    }, [])

    const subtotal = orderDetails.reduce((acc, od) => od.price * od.qty + acc, 0);
    const discounttotal = orderDetails.reduce((acc, od) => parseFloat(od.discount) + acc, 0);


    return (
        <>

            <div className="card invoice"   ref={invoiceRef} >
                <div className="card-body">
                    <div className="bg-light p-4 rounded position-relative mb-3">
                        <div className="position-absolute top-0 end-0 z-0">
                            <img alt="img" data-cfsrc="assets/img/bg/card-bg.png" style={{ display: 'none', visibility: 'hidden' }} /><noscript>&lt;img src="assets/img/bg/card-bg.png" alt="img"&gt;</noscript>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-bottom flex-wrap mb-3 pb-2 position-relative z-1">
                            <div className="mb-3">
                                <h4 className="mb-1">Invoice</h4>
                                <div className="d-flex align-items-center flex-wrap row-gap-3">
                                    <div className="me-4">
                                        <h6 className="fs-14 fw-semibold mb-1">Dreams Technologies Pvt Ltd.,</h6>
                                        <p>15 Hodges Mews, High Wycombe HP12 3JL, United Kingdom</p>
                                    </div>
                                    <span><img alt="img" width={48} height={48} data-cfsrc="assets/img/icons/not-paid.png" style={{ display: 'none', visibility: 'hidden' }} /><noscript>&lt;img src="assets/img/icons/not-paid.png" alt="img" width="48" height="48"&gt;</noscript></span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <img src="assets/img/invoice-logo.svg" className="invoice-logo-dark" alt="img" />
                                <img src="assets/img/invoice-logo-white-2.svg" className="invoice-logo-white" alt="img" />
                            </div>
                        </div>
                        {/* start row */}
                        <div className="row gy-3 position-relative z-1">
                            <div className="col-lg-4">
                                <div>
                                    <h6 className="mb-2 fs-16 fw-semibold">Invoice Details</h6>
                                    <div>
                                        <p className="mb-1">Invoice Number : <span className="text-dark">INV{order.id}</span></p>
                                        <p className="mb-1">Issued On : <span className="text-dark">{order.order_date}</span></p>
                                        <p className="mb-1">Due Date :  <span className="text-dark">{order.delivery_date}</span></p>
                                        <p className="mb-1">Recurring Invoice  :  <span className="text-dark">Monthly</span></p>
                                        <span className="badge bg-danger badge-sm">Due in 8 days</span>
                                    </div>
                                </div>
                            </div>{/* end col */}
                            <div className="col-lg-4">
                                <div>
                                    <h6 className="mb-2 fs-16 fw-semibold">Billing From</h6>
                                    <div>
                                        <h6 className="fs-14 fw-semibold mb-1">Kanakku Invoice Management</h6>
                                        <p className="mb-1">15 Hodges Mews, HP12 3JL, United Kingdom</p>
                                        <p className="mb-1">Phone : +1 54664 75945</p>
                                        <p className="mb-1">Email : info@example.com</p>
                                        <p className="mb-0">GST : 243E45767889</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* end col */}
                            <div className="col-lg-4">
                                <div>
                                    <h6 className="mb-2 fs-16 fw-semibold">Billing To</h6>
                                    <div className="bg-white rounded p-3">
                                        <div className="d-flex align-items-center mb-1">
                                            <img src="../../assets/img/icons/billing-to-image.svg" alt="img" className="avatar avatar-lg me-2" />
                                            <div>
                                                <h6 className="fs-14 fw-semibold">Timesquare Tech</h6>
                                            </div>
                                        </div>
                                        <p className="mb-1">Name : {customer.name} </p>
                                        <p className="mb-1">Address: {order.shipping_address}</p>
                                        <p className="mb-1">Phone : {customer.mobile} </p>
                                        <p className="mb-1">Email : {customer.email}</p>

                                    </div>
                                </div>
                            </div>{/* end col */}
                        </div>
                        {/* end row */}
                    </div>
                    <div className="mb-3">
                        <h6 className="mb-3">Product / Service Items</h6>
                        <div className="table-responsive rounded border-bottom-0 border table-nowrap">
                            <table className="table m-0">
                                <thead className="table-dark">
                                    <tr>
                                        <th>#</th>
                                        <th>Product/Service</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Discount</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        orderDetails.map((od, i) => (

                                            <tr key={i}>
                                                <td>{++i}</td>
                                                <td className="text-dark">{od.name}</td>
                                                <td>{od.qty}</td>
                                                <td>{od.price}</td>
                                                <td>{od.discount}</td>
                                                <td>{(od.price * od.qty) - od.discount}</td>

                                            </tr>

                                        ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="border-bottom mb-3">
                        {/* start row */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center p-4 mb-3">
                                    <div className="me-3">
                                        <p className="mb-2">Scan to the pay</p>
                                        <span><img alt="QR" data-cf src="../../../assets/img/icons/qr.png" style={{ display: 'visible', visibility: 'visible' }} /><noscript>&lt;img src="assets/img/icons/qr.png" alt="QR"&gt;</noscript></span>
                                    </div>
                                    <div>
                                        <h6 className="mb-2">Bank Details</h6>
                                        <div>
                                            <p className="mb-1">Bank Name :  <span className="text-dark">ABC Bank</span></p>
                                            <p className="mb-1">Account Number :  <span className="text-dark">782459739212</span></p>
                                            <p className="mb-1">IFSC Code :  <span className="text-dark">ABC0001345</span></p>
                                            <p className="mb-0">Payment Reference :  <span className="text-dark">INV-20250220-001</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end col */}
                            <div className="col-lg-6">
                                <div className="mb-3 p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="fs-14 fw-semibold">Amount</h6>
                                        <h6 className="fs-14 fw-semibold">${subtotal}</h6>
                                    </div>
                                    {/* <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="fs-14 fw-semibold">CGST (9%)</h6>
                                        <h6 className="fs-14 fw-semibold">$18</h6>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <h6 className="fs-14 fw-semibold">SGST (9%)</h6>
                                        <h6 className="fs-14 fw-semibold">$18</h6>
                                    </div> */}
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <h6 className="fs-14 fw-semibold">Discount</h6>
                                        <h6 className="fs-14 fw-semibold text-danger">${discounttotal}</h6>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
                                        <h6>Total (USD)</h6>
                                        <h6>${subtotal - discounttotal}</h6>
                                    </div>
                                    <div>
                                        <h6 className="fs-14 fw-semibold mb-1">Total In Words</h6>
                                        <p>Five Hundred &amp; Ninety Six Dollars</p>
                                    </div>
                                </div>
                            </div>{/* end col */}
                        </div>
                        {/* end row */}
                        <div className="row actions">
                            <div className="col-lg-6">
                                <button className='btn btn-secondary' onClick={handlePrint}>Print</button>
                            </div>
                        </div>
                    </div>


                </div>{/* end card body */}
            </div>



        </>
    )
}

export default OrderInvoice