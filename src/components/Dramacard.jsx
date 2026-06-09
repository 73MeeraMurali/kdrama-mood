import { Link } from "react-router-dom"

function DramaCard({ drama, deleteDrama }) {

  const addToFavorites = () => {
    const favorites =
      JSON.parse(localStorage.getItem("favorites")) || []

    const alreadyExists = favorites.find(
      (item) => item.id === drama.id
    )

    if (!alreadyExists) {
      favorites.push(drama)
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
      )

      alert(`${drama.title} added to My List ❤️`)
    }
  }

  return (
    <div className="block bg-zinc-900 rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

      <Link to={`/drama/${drama.id}`}>
        <img
          src={drama.image}
          alt={drama.title}
          className="h-64 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="text-white text-xl font-bold">
            {drama.title}
          </h2>

          <p className="text-pink-400">
            {drama.genre.join(", ")}
          </p>

          <p className="text-gray-300">
            ⭐ {drama.rating}
          </p>
        </div>
      </Link>

      <div className="p-4 pt-0">
        <button
          onClick={addToFavorites}
          className="mt-3 px-3 py-1 bg-pink-500 rounded-lg"
        >
          ❤️ Add to List
        </button>
      </div>
      {drama.isUserAdded && (
  <button
    onClick={() => deleteDrama(drama.id)}
    className="bg-red-500 text-white px-4 py-2 rounded-lg mt-2"
  >
    Delete Drama
  </button>
)} 

</div>


    
  )
}

export default DramaCard