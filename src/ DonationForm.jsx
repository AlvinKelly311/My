import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom'; // Import useOutletContext
import Navbar from './Navbar';
import { PaystackButton } from 'react-paystack';

const DonationForm = ({ projectId }) => {
    const { onDonate } = useOutletContext(); // Get onDonate from context
    const publicKey = "pk_test_839b80808fbf80afbf27f14c860c6f1fce7c6a7c";
    const [amountInDollars, setAmountInDollars] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    // Function to handle successful payment
    const onSuccess = (reference) => {
        console.log('Payment successful!', reference);
        setPaymentSuccess(true);
    };

    // Function to handle payment closure
    const onClose = () => {
        console.log('Payment closed');
    };

    // Convert dollar amount to cents
    const amountInCents = amountInDollars * 100;

    const handleInputChange = (e) => {
        setAmountInDollars(parseFloat(e.target.value) || 0);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const donationAmount = parseFloat(amountInDollars);

        // Validation check
        if (isNaN(donationAmount) || donationAmount <= 0) {
            setError('Please enter a valid donation amount.');
            return;
        }

        // Additional validation for email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const newData = {
            username,
            password,
            email,
            id: Date.now()
        };

        // Send the data to a server or store it somewhere
        console.log(newData);

        // Call the onDonate function passed from the parent component
        onDonate(projectId, donationAmount);

        // Clear all fields
        setUsername("");
        setPassword("");
        setEmail("");
        setAmountInDollars(0);
        setError("");
    };

    return (
        <div className='container d-flex flex-column justify-content-center align-items-center min-vh-100 mx-5'>
            <Navbar />
            <form 
                onSubmit={handleSubmit} 
                className="container d-flex flex-column bg-light w-50" 
                style={{  margin: '0 auto', position: "relative", right: "3rem", padding: '3rem' }}
            >
                <div className="mb-3">
                    <label className="form-label" htmlFor="username">Username </label>
                    <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputEmail4">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="inputPassword4">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3 d-flex flex-column  gap-4 ">
                    <label className="form-label" htmlFor="donationAmount">Donation Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount in dollars"
                        value={amountInDollars}
                        onChange={handleInputChange}
                    />
                    {error && <div className="text-danger">{error}</div>}
                    <PaystackButton
                        text="Submit"
                        className="paystack-button "
                        callback={onSuccess}
                        close={onClose}
                        disabled={amountInDollars <= 0}
                        email={email}
                        amount={amountInCents}
                        publicKey={publicKey}
                    />
                </div>

        
            </form>
        </div>
    );
};

export default DonationForm;