function Hero() {
  return (
    <div
      className="h-[400px] rounded-2xl bg-cover bg-center flex items-center p-10 mb-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba')",
      }}
    >
      <div>
        <h1 className="text-5xl font-bold text-white mb-4">
          Featured Drama
        </h1>

        <p className="text-gray-200 mb-4">
          Discover the best Korean dramas of all time.
        </p>

        
      </div>
    </div>
  )
}

export default Hero