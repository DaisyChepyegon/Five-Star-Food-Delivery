export default function CreateRestaurant() {
    // post a request to add a new restaurant to the list
    
    const AddRestaurant = async (e) => {
        e.preventDefault();
        const restaurant = {
            name: e.target.name.value,
            location: e.target.location.value,
        };
        const response = await fetch("http://127.0.0.1:3000/restaurants", 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(restaurant),
        }
        );
        const data = await response.json();
        console.log(data);
        // if successful, redirect to the restaurant page
    };

    //clear form after submit

const clearForm = (e) => {
    e.target.name.value = "";
    e.target.location = "";
    window.render()
}

return (
    <div className="container">
        <h1>Post A Restaurant</h1>
        <form onSubmit={  AddRestaurant } className="form-center">
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Location:</label>
            <input type="text" name="location" />
            <button type="submit" onClick={clearForm} >
                Submit
            </button>
        </form>
    </div>
);
}