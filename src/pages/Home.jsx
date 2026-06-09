import { useState } from "react"
import dramas from "../data/dramas"
import DramaCard from "../components/Dramacard"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")






  const genres = [
    "All",
    "Romance",
    "Thriller",
    "Crime",
    "Action",
  ]

  const filteredDramas = dramas.filter((drama) => {
    const matchesGenre =
      selectedGenre === "All" ||
      drama.genre.includes(selectedGenre)
  
      const matchesSearch =
      drama.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      drama.genre
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      drama.cast
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  
    return matchesGenre && matchesSearch
  })

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />


      <div className="px-8 py-10">
        <h1 className="text-white text-5xl font-bold mb-3">
          Browse Dramas
        </h1>

        <p className="text-gray-400 mb-10">
          Find your perfect drama mood
        </p>
        <div className="mb-8">
        <input
  type="text"
  placeholder="Search dramas..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full md:w-96 px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 outline-none"
/>
</div>

        <div className="flex gap-4 mb-10 flex-wrap">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-5 py-2 rounded-full transition ${
                selectedGenre === genre
                  ? "bg-pink-500 text-white"
                  : "bg-zinc-800 text-gray-300"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDramas.map((drama) => (
            <DramaCard key={drama.id} drama={drama} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home