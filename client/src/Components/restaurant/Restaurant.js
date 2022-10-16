import { useState } from "react";
import { useNavigate,  } from "react-router-dom";

export default function CreateRestaurant() {
    const [restaurant, setRestaurant] = useState("")
    const navigate = useNavigate()
    // post a request to add a new restaurant to the list
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:3000/restaurants", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({restaurant})
        }).then((r) => {
          if (r.ok) {
            r.json().then((restaurant) => setRestaurant(restaurant));
            navigate("/home")
          }
        });
      }

    //clear form after submit

// const clearForm = (e) => {
//     e.target.name.value = "";
//     e.target.location = "";
//     window.render()
//     navigate("/home")
// }

return (
    <div className="container">
        <h1>Post A Restaurant</h1>
        <form onSubmit={handleSubmit}  className="form-center">
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Location:</label>
            <input type="text" name="location" />
            <label>Image Address:</label>
            <input type="text" name="image" />
            <button type="submit" >
                Submit
            </button>
        </form>
    </div>
);
}