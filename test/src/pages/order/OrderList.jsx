import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const OrderList = () => {

    const [orders, setOrders] = useState([])
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    function fetchOrder() {
        axios(
            {
                url: `${baseUrl}/order/`,
                method: "GET",
                data: {}
            }
        )
            .then(res => {
                console.log(res.data);
                setOrders(res.data.orders)
                setloading(false);
            })
            .catch(err => {
                console.log(err.data);
            })
    }


  useEffect(() => {
     fetchOrder() 
  }, [])
  



    return (



        <>
            <h1> Order List </h1>


            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>customer_id</th>
                        <th>order_total</th>
                        <th>shipping_address</th>
                        <th>action</th>
                       
                    </tr>
                </thead>

                <tbody>
                    {orders.map((o, i) => (
                        <tr key={i}>
                            <td>{++i}</td>
                            <td>{o.customer_id}</td>
                            <td>{o.order_total}</td>
                            <td>{o.shipping_address}</td>
                            <td> <Link to={`/order/invoice/${o.id}`} className='btn btn-info'>View</Link></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </>





    )
}

export default OrderList