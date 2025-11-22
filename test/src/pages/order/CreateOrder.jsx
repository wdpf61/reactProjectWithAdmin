import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import "./orderstyle.css";
const CreateOrder = () => {

    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        id:"",
        name:"",
        price:0,
        discount:0,
        qty:1,
        subtotal:0
    })

    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name == "customer") {
            setCustomer((c) => ({
                ...c,
                [name]: value
            }));
        }else if (name == "product") {
            let pro = JSON.parse(value)
            
             

            setProduct( (p)  => ({
                ...p,
                id:pro.id,
                price:pro.offer_price,
                name:pro.name,
            }));
             

        }else{
             
            setProduct((p) => ({
                ...p,
                [name] : value
            }));
        }
       
            
           
      
        



    }

    const fethCustomerAndProduct = () => {
        axios(
            {
                url: `${baseUrl}/customer`,
                method: "GET",
                data: {}
            }
        )
            .then(res => {
                console.log(res.data);
                setCustomers(res.data.customers)
                setProducts(res.data.products)
                setloading(false);
            })
            .catch(err => {
                console.log(err.data);
            })
    }

    useEffect(() => {
        fethCustomerAndProduct();
    }, []);

    console.log(product);


    return (
        <>

            <div className="container mt-5">
                <div className="card shadow">
                    <div className="card-header bg-primary text-white">
                        <h4 className="mb-0">Order Invoice</h4>
                    </div>
                    <div className="card-body">
                        {/* Vendor & Product Selection */}
                        {/* <form > */}
                        <div className="row g-3">
                            <div className="col-md-4">
                                <label className="form-label">Customer</label>
                                <select className="form-select" name="vendor" onChange={(e) => {
                                    setCustomer(JSON.parse(e.target.value));
                                    setAddress(customer.address);
                                }}>
                                    <option selected disabled>Select Customer</option>
                                    {customers && customers.map((c, i) => (
                                        <option key={i} value={JSON.stringify(c)}>{c.name}</option>
                                    ))}

                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Address</label>
                                <input onChange={handleChange} type="text" value={customer.address && customer.address} className="form-control" name='address'
                                    placeholder={!customer.address && "Äddress not found"}
                                />
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
                                    </tr>
                                    <tr>
                                        <th>#</th>
                                        <th>
                                            <select className="form-select" name="product" onChange={handleChange}>
                                                <option selected disabled>Select Product</option>
                                                {products.map((p, i) => (
                                                    <option key={i} value={JSON.stringify(p)}>{p.name}</option>

                                                ))}



                                            </select>


                                        </th>

                                        <th><input type="number"  onChange={handleChange} value={product.qty} className="form-control" name='qty' placeholder='qty' /></th>
                                        <th>{product.price}</th>
                                        <th><input onChange={handleChange} value={product.discount} type="text" className="form-control" name='discount' placeholder='discount' /></th>
                                        <th> <button className='btn btn-primary'>Add</button> </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {/* For backend/server rendering */}
                                    <tr>
                                        <td>1</td>
                                        <td>Pen</td>
                                        <td>10</td>
                                        <td>20</td>
                                        <td>0%</td>
                                        <td>200</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Notebook</td>

                                        <td>5</td>
                                        <td>100</td>
                                        <td>5%</td>
                                        <td>475</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* Totals */}
                        <div className="text-end mt-3">
                            <h5>Subtotal: __________</h5>
                            <h4>Total: __________</h4>
                        </div>
                        <div className="text-end mt-3">
                            <button className="btn btn-primary">Submit Invoice</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>






        </>
    )
}

export default CreateOrder