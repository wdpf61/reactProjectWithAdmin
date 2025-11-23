import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { pl } from 'zod/locales';
import useCart from '../../components/useCart';
// import "./orderstyle.css";
const CreateOrder = () => {

    const {clearAll, clear,dicreaseItem,delItem, addItem, getCart, cart } = useCart("HRNOrder");

    const baseUrl = import.meta.env.VITE_API_BASE_URL;
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
     let items = getCart() ?? [];

     
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({});
    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState({
        id: "",
        name: "",
        price: 0,
        discount: 0,
        qty: 1,
        subtotal: 0
    })

    const [summary, setSummary] = useState({
        subtotal:0,
        discount:0,
        total:0
    })
    
    const calculateSummary=()=>{
        let subtotal = 0
        let discount =0;
        let total =0;
        
        cartItems.forEach((item)=>{
            subtotal += item.qty * item.price;
            discount +=item.discount ;
        });
         total = subtotal - discount

         setSummary({
            subtotal,
            discount,
            total
         })
    }

     useEffect(()=>{
        calculateSummary()
     },[cartItems])



    const handleChange = (e) => {
        const { name, value } = e.target

        if (name == "address") {
            setCustomer((c) => ({
                ...c,
                [name]: value
            }));
        } else if (name == "product") {
            let pro = JSON.parse(value)
            setProduct((p) => ({
                ...p,
                id: pro.id,
                price: pro.offer_price,
                name: pro.name,
                subtotal: pro.offer_price
            }));


        } else if (name == "qty") {
            setProduct((p) => ({
                ...p,
                qty: value,
                subtotal: value * p.price
            }));
        } else if (name == "discount") {
            setProduct((p) => ({
                ...p,
                discount: value ,
                // subtotal: p.subtotal - (p.subtotal * (value / 100))
            }));
        }
    }


    const handleAddCart = () => {
        addItem({
            ...product,
            discount: product.subtotal * (product.discount / 100)
        })

    }



    useEffect(() => {
        setCartItems(cart);
        fethCustomerAndProduct();
    },[cart]);

   
    const  handleOrderSubmit =()=>{

     let items={
         customer,
         cartItems,
         summary
     }


     axios({
         url:`${baseUrl}/order/react_order_save`,
         method:"POST",
         data:items
     })
     .then(res =>{
           console.log(res.data); 
           clear();
     })
     .catch(err =>{
        console.log(err);
     })


    }
    

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
                                        <th>Discount %</th>
                                        <th>Subtotal</th>
                                        <th>Action</th>
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

                                        <th><input type="number" onChange={handleChange} value={product.qty} className="form-control" name='qty' placeholder='qty' /></th>
                                        <th> <input type="number" onChange={handleChange} value={product.price} className="form-control" name='price' placeholder='price' disabled />   </th>
                                        <th><input onChange={handleChange} value={product.discount} type="text" className="form-control" name='discount' placeholder='discount' /></th>
                                        <th><input onChange={handleChange} value={product.subtotal} type="text" className="form-control" name='subtotal' placeholder='subtotal' disabled /></th>
                                        <th> <button onClick={handleAddCart} className='btn btn-primary'>Add</button> </th>
                                    </tr>

                                </thead>
                                <tbody>
                                    {cartItems.map((c,i) => (
                                        <tr key={i}>
                                            <td>{++i}</td>
                                            <td>{c.name}</td>
                                            <td>{c.qty}</td>
                                            <td>{c.price}</td>
                                            <td>{c.discount}</td>
                                            <td>{c.subtotal}</td>
                                            <td><button className='btn btn-danger' onClick={()=>delItem(c.id)} >Del</button></td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                        {/* Totals */}
                        <div className="text-end mt-3">
                            <p className='fw-bold'>Subtotal:{summary.subtotal}</p>
                            <p className='fw-bold'>Discount:{summary.discount}</p>
                            <p className='fw-bold'>Total: {summary.total}</p>
                        </div>
                        <div className="text-end mt-3">
                            <button onClick={handleOrderSubmit} className="btn btn-primary">Submit Invoice</button>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateOrder