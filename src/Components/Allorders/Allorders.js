import React, { useEffect, useState } from 'react';
import { Row, Table } from 'react-bootstrap';
import Allorder from '../Allorder/Allorder';

const Allorders = () => {
    const [allorders, setAllorders] = useState([]);

    useEffect(() => {
        fetch('https://gentle-beach-61220.herokuapp.com/orders')
            .then(res => res.json()
                .then(data => setAllorders(data)))
    }, [allorders])

    const handelDeleteOrder = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://gentle-beach-61220.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = allorders.filter(order => order._id !== id);
                        setAllorders(remainingOrders);
                    }
                });
        }
    }
    //  All oder 

    const handelAcceptOrder = id => {
        const proceed = window.confirm('Are you sure, you want to Accept order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
            })
                .then(res => res.json())
                .then(data => {
                    alert('Your Order Accepted');
                    setAllorders(allorders);
                });
        }
    }



    return (
        <div>
            <div className="container pb-5">
                <h2 className="p-2 fw-bold bg-dark text-white mt-4">All Orders</h2>
                {/* Pass the data to another component using map  */}

                <Table striped bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allorders.map(allorders => <Allorder
                                handelDeleteOrder={handelDeleteOrder}
                                allorders={allorders} key={allorders._id}></Allorder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Allorders;