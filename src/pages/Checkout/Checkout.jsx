import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, _id, price, img } = service;

    const handleBookMark = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customer: name,
            date,
            email,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);
        fetch('https://car-doctor-server-alamin657.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, Booking!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                // 'Deleted!',
                                // 'Your file has been deleted.',
                                'Booking has been Successfully'
                            )
                        }
                    })
                }

            })


    }
    return (
        <div>
            <h2 className='text-center text-3xl'>Book Service:{title}</h2>
            <form onSubmit={handleBookMark}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" />
                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="booking Confirm" />
                </div>
            </form>
        </div>

    );
};

export default Checkout;