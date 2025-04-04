import React from 'react'

const navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <div className="text-xl font-bold">MyWebsite</div>
    <ul className="hidden md:flex space-x-6">
      <li><a href="#" className="hover:text-gray-300">Home</a></li>
      <li><a href="#" className="hover:text-gray-300">About</a></li>
      <li><a href="#" className="hover:text-gray-300">Services</a></li>
      <li><a href="#" className="hover:text-gray-300">Contact</a></li>
    </ul>
    <div className="md:hidden">
      <button className="focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
</nav>

  )
}

export default navbar