function Welcome({ customer }) {
    if (customer) {
        return <h1>Welcome, {customer.first_name}!</h1>;
    } else {
        return <h1>Please Sign Up or Login</h1>;
    }
}

export default Welcome;