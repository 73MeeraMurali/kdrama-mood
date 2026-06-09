import { useState } from "react"
import dramas from "../data/dramas"
import DramaCard from "../components/Dramacard"
import Navbar from "../components/Navbar"

function Browse() {
  const userDramas =
  JSON.parse(localStorage.getItem("userDramas")) || []

const allDramas = [...dramas, ...userDramas]
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDramas = allDramas.filter((drama) =>
    drama.title.toLowerCase().includes(searchTerm.toLowerCase())

  )
  const deleteDrama = (id) => {
    const userDramas =
      JSON.parse(localStorage.getItem("userDramas")) || []
  
    const updatedDramas = userDramas.filter(
      (drama) => drama.id !== id
    )
  
    localStorage.setItem(
      "userDramas",
      JSON.stringify(updatedDramas)
    )
  
    window.location.reload()
  }
  

  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <div className="px-8 py-10">
        <h1 className="text-white text-5xl font-bold mb-4">
          Browse Dramas
        </h1>

        <input
          type="text"
          placeholder="Search dramas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-96 px-4 py-3 rounded-xl bg-zinc-800 text-white mb-8"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {filteredDramas.map((drama) => (
            <DramaCard key={drama.id} drama={drama}
            deleteDrama={deleteDrama} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Browse