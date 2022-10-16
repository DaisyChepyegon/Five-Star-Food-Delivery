import React, {useEffect, useState} from 'react'
import {FaStar} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import "./Reviews.css"



const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"

};

function Reviews() {
  const navigate = useNavigate();
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [reviews, setReview] = useState("")
  const [review, setReviews] = useState([])
  const [delreview, setDelreviews] = useState([])
  const stars = Array(5).fill(0)

  async function fetchingreviews(){
    await fetch("http://127.0.0.1:3000/reviews")
    .then((resp) => resp.json())
    .then((review) => setReviews(review));
  }

  useEffect(() => {
    fetchingreviews()
   
  }, []);
  console.log(review)

  const handleDelete=(id) => {
    fetch(`http://localhost:4000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((delreview) => setDelreviews(delreview));
    }

  let container = review.map((item) => (
    <div className='contains'>
      <div className='rigth'>
      <h3>name:{item.name}</h3>
      <h4>{item.reviews}</h4>
      </div>
     <div className='left'>
      <button onClick={handleDelete}>delete</button>
     </div>
      
    </div>

))

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({reviews})
    }).then((r) => {
      if (r.ok) {
        r.json().then((reviews) => setReview(reviews));
        navigate("/home")
      }
    });
  }

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  return (
    <div className="rating">
    <div style={
      styles.container
    } >
      <h2>Ratings
      </h2>
      <div style={
        styles.stars
      }>
        {
        stars.map((_, index) => {
          return (
            <FaStar key={index}
              size={24}
              onClick={
                () => handleClick(index + 1)
              }
              onMouseOver={
                () => handleMouseOver(index + 1)
              }
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index ? colors.orange : colors.grey
              }
              style={
                {
                  marginRight: 10,
                  cursor: "pointer"
                }
              }/>
          )
        })
      } </div>
      <form style={
          styles.form
        }
        onSubmit={handleSubmit}>
        <h2>Add Review</h2>
        name:<textarea/>
        <textarea style={
          styles.textarea
        }/>

        <button style={
          styles.button
        }>
          Submit
        </button>
      </form>

    </div>

    <div>
      {container}
    </div>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }

};


export default Reviews
