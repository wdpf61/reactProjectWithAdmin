import axios from 'axios';
import React, { useEffect, useState } from 'react'
import api from '../../api/axios';

const Purchase = () => {
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);
 
    
    function fetchApi() {
        api({
            url: `/supplier/product_suppliers/`,
            method: "GET",
        })
            .then(res => {
                console.log(res.data);
                setProducts(res.data.products)
                setSuppliers(res.data.suppliers)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchApi()
    }, [])



    return (
        <>

            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h4 className="mb-0">Order Invoice</h4>
                    </div>
                    <div className="card-body">
                        {/* Vendor & Product Selection */}
                        <form>
                            <div className="row g-3">
                                <div className="col-md-4">
                                    <label className="form-label">Vendor</label>
                                    <select className="form-select" name="vendor"  onChange={}>
                                        <option selected disabled>Select supplier</option>

                                        {suppliers.map((s, i) => (
                                            <option key={i} value={s} >{s.name}</option>

                                        ))}


                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" name="address" />
                                </div>

                            </div>
                            <hr />
                            {/* Table */}
                            <div className="table-responsive">
                                <table className="table table-bordered align-middle">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th>#</th>
                                            <th>Product</th>

                                            <th>Qty</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Subtotal</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <th>#</th>
                                            <th>

                                                <select className="form-select" name="product">
                                                    <option selected disabled>Select Product</option>
                                                    {products.map((p, i) => (
                                                        <option key={i} value={p} >{p.name}</option>

                                                    ))}

                                                </select>
                                            </th>

                                            <th>


                                                <input type="number" className="form-control" name="qty" />


                                            </th>
                                            <th>
                                                <input type="number" className="form-control" name="price" />

                                            </th>
                                            <th>
                                                <input type="number" className="form-control" name="discount" />
                                            </th>
                                            <th>
                                                <input type="number" className="form-control" name="subtotal" />
                                            </th>
                                            <th>
                                                <button className='btn btn-primary'>Add</button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* For backend/server rendering */}
                                        <tr>
                                            <td>1</td>
                                            <td>Pen</td>
                                            <td>Vendor A</td>
                                            <td>10</td>
                                            <td>20</td>
                                            <td>0%</td>
                                            <td>200</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Notebook</td>
                                            <td>Vendor B</td>
                                            <td>5</td>
                                            <td>100</td>
                                            <td>5%</td>
                                            <td>475</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Totals */}
                            <div className="text-end">
                                <h5>Subtotal: ____</h5>
                                <h4>Total: ____</h4>
                            </div>
                            <div className="text-end mt-3">
                                <button className="btn btn-primary">Submit Invoice</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Purchase