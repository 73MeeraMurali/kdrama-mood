import { useState } from "react"
import DramaCard from "../components/Dramacard"

function MyList() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  )

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (drama) => drama.id !== id
    )

    setFavorites(updatedFavorites)

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    )
  }

  return (
    <div className="bg-black min-h-screen text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        My List
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {favorites.map((drama) => (
          <div key={drama.id}>
            <DramaCard drama={drama} />

            <button
              onClick={() => removeFavorite(drama.id)}
              className="mt-2 bg-red-500 px-4 py-2 rounded-lg"
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyList