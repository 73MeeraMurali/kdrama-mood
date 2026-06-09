import { Link } from "react-router-dom"
function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-black text-white">
      <h1 className="text-3xl font-bold text-pink-400">
        KDramaMood
      </h1>

      <ul className="flex gap-6 text-lg">
  <li>
    <Link
      to="/"
      className="cursor-pointer hover:text-pink-400"
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      to="/browse"
      className="cursor-pointer hover:text-pink-400"
    >
      Browse
    </Link>
  </li>

  <li>
    <Link
      to="/my-list"
      className="cursor-pointer hover:text-pink-400"
    >
      My List
    </Link>
  </li>
  <li>
  <Link
    to="/add-drama"
    className="cursor-pointer hover:text-pink-400"
  >
    Add Drama
  </Link>
</li>
</ul>
    </nav>
  )
}

export default Navbar