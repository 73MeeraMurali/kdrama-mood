import { useState } from "react"

function AddDrama() {
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")
  const [year, setYear] = useState("")
  const [episodes, setEpisodes] = useState("")
  const [cast, setCast] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState(null)

  const handleSubmit = () => {
    const newDrama = {
      id: Date.now(),
      title,
      genre: [genre],
      rating: Number(rating),
      year: Number(year),
      episodes: Number(episodes),
      cast: cast.split(","),
      description,
      image,
      favorite: false,
      isUserAdded:true,
    }

    const dramas =
      JSON.parse(localStorage.getItem("userDramas")) || []

    dramas.push(newDrama)

    localStorage.setItem(
      "userDramas",
      JSON.stringify(dramas)
    )

    alert("Drama Added Successfully!")

    setTitle("")
    setGenre("")
    setRating("")
    setYear("")
    setEpisodes("")
    setCast("")
    setDescription("")
    setImage("")
  }

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">
        Add New Drama
      </h1>

      <div className="space-y-4 max-w-xl">
        <input
          className="w-full p-3 bg-zinc-800 rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

<select
  className="w-full p-3 bg-zinc-800 rounded"
  value={genre}
  onChange={(e) => setGenre(e.target.value)}
>
  <option value="">Select Genre</option>
  <option value="Romance">Romance</option>
  <option value="Comedy">Comedy</option>
  <option value="Drama">Drama</option>
  <option value="Action">Action</option>
  <option value="Crime">Crime</option>
  <option value="Thriller">Thriller</option>
  <option value="School">School</option>
</select>

<div>
  <p className="mb-2">Rating: {rating || 0}</p>

  <input
    type="range"
    min="1"
    max="10"
    step="0.1"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    className="w-full"
  />
</div>

        <input
          className="w-full p-3 bg-zinc-800 rounded"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <input
          className="w-full p-3 bg-zinc-800 rounded"
          placeholder="Episodes"
          value={episodes}
          onChange={(e) => setEpisodes(e.target.value)}
        />

        <input
          className="w-full p-3 bg-zinc-800 rounded"
          placeholder="Cast"
          value={cast}
          onChange={(e) => setCast(e.target.value)}
        />

<textarea
  rows="5"
  placeholder="Drama Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  className="w-full p-3 bg-zinc-800 rounded"
/>

<input
  type="file"
  accept="image/*"
  className="w-full p-3 bg-zinc-800 rounded"
  onChange={(e) => {
    const file = e.target.files[0]

    const reader = new FileReader()

    reader.onloadend = () => {
      setImage(reader.result)
    }

    if (file) {
      reader.readAsDataURL(file)
    }
  }}
/>
{image && (
  <div className="mt-4">
    <p className="mb-2 text-gray-300">Poster Preview</p>

    <img
      src={image}
      alt="Preview"
      className="w-48 rounded-lg border border-gray-700"
    />
  </div>
)}
<div className="mt-6 bg-zinc-900 p-4 rounded-xl">
  <h3 className="text-xl font-bold">
    {title || "Drama Title"}
  </h3>

  <p className="text-pink-400">
    {genre || "Genre"}
  </p>

  <p>⭐ {rating || 0}</p>
</div>

        <button
          onClick={handleSubmit}
          className="bg-pink-500 px-5 py-3 rounded-lg"
        >
          Add Drama
        </button>
      </div>
    </div>
  )
}

export default AddDrama