import { Link, useParams } from "react-router-dom"

import dramas from "../data/dramas"
import { useState } from "react"

function DramaDetails() {
  
  const { id } = useParams()
  const userDramas =
  JSON.parse(localStorage.getItem("userDramas")) || []

const allDramas = [...dramas, ...userDramas]


  const drama = allDramas.find(
    (d) => d.id === Number(id)
  )
  const [review, setReview] = useState("")

const [reviews, setReviews] = useState(
  JSON.parse(localStorage.getItem(`reviews-${id}`)) || []
)
const addReview = () => {
  if (!review.trim()) return

  const newReviews = [...reviews, review]

  setReviews(newReviews)

  localStorage.setItem(
    `reviews-${id}`,
    JSON.stringify(newReviews)
  )

  setReview("")

}
const deleteReview = (indexToDelete) => {
  const updatedReviews = reviews.filter(
    (_, index) => index !== indexToDelete
  )

  setReviews(updatedReviews)

  localStorage.setItem(
    `reviews-${id}`,
    JSON.stringify(updatedReviews)
  )
}
{drama.id > 1000000 && (
  <button
    onClick={() => {
      const userDramas =
        JSON.parse(localStorage.getItem("userDramas")) || []

      const updatedDramas =
        userDramas.filter((d) => d.id !== drama.id)

      localStorage.setItem(
        "userDramas",
        JSON.stringify(updatedDramas)
      )

      alert("Drama deleted successfully!")

      window.location.href = "/browse"
    }}
    className="bg-red-500 px-4 py-2 rounded-lg mt-4"
  >
    Delete This Drama
  </button>
)}


  if (!drama) {
    return (
      <div className="text-white p-10">
        Drama not found
      </div>
    )
  }
  


  return (
    <div className="bg-black min-h-screen text-white p-10">
      <Link
  to="/"
  className="inline-block mb-6 px-4 py-2 bg-pink-500 rounded-lg"
>
  ← Back
</Link>
      <img
        src={drama.image}
        alt={drama.title}
        className="w-full max-w-3xl rounded-2xl mb-8"
      />

      <h1 className="text-5xl font-bold mb-4">
        {drama.title}
      </h1>

      <p className="text-pink-400 text-xl mb-2">
        {drama.genre?.join(", ")}
      </p>

      <p className="text-yellow-400 mb-6">
        ⭐ {drama.rating}
      </p>

      <div className="space-y-4">
  <p className="text-gray-300">
    {drama.description}
  </p>

  <p>
    <span className="font-bold">Year:</span> {drama.year}
  </p>

  <p>
    <span className="font-bold">Episodes:</span> {drama.episodes}
  </p>

  <p>
    <span className="font-bold">Cast:</span>{" "}
    {drama.cast?.join(", ")}
  </p>
  <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    Reviews
  </h2>

  <textarea
    value={review}
    onChange={(e) => setReview(e.target.value)}
    placeholder="Write your review..."
    className="w-full p-3 rounded-lg bg-zinc-800 text-white"
  />

  <button
    onClick={addReview}
    className="mt-3 px-4 py-2 bg-pink-500 rounded-lg"
  >
    Submit Review
  </button>

  <div className="mt-6 space-y-3">
  {reviews.map((r, index) => (
  <div
    key={index}
    className="bg-zinc-900 p-3 rounded-lg flex justify-between items-center"
  >
    <span>{r}</span>

    <button
      onClick={() => deleteReview(index)}
      className="bg-red-500 px-3 py-1 rounded-lg text-sm"
    >
      Delete
    </button>
  </div>
))}  
  </div>
</div>

</div>
    </div>
    
  )
}

export default DramaDetails