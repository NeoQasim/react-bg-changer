
import { useState } from 'react'
import './App.css'
function App() {
  const [urlLink, seturlLink] = useState("https://images.unsplash.com/photo-1612988952181-c995680479a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhZXN0aGV0aWN8ZW58MHx8MHx8fDA%3D&w=1000&q=80")
  const pictures = [
    { name: "sky", urlLink: "https://wallpapers.com/images/hd/aesthetic-sky-background-ww8tpqgc6a72iapk.jpg" },
    { name: "forest", urlLink: "https://images.pexels.com/photos/1287075/pexels-photo-1287075.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    { name: "city", urlLink: "https://e0.pxfuel.com/wallpapers/411/354/desktop-wallpaper-raining-city-bg.jpg" },
    { name: "village", urlLink: "https://wallpapercave.com/wp/wp12519966.jpg" }
  ]

  return (
    <>
      <div className="w-full h-screen bg-gray-800">
        <h1 className="text-center text-white font text-xl font-bold">  working</h1>
        <div className="center-div w-56 p-8 text-white"><img className='w-full object-cover h-44' src={urlLink} alt="" /></div>
        <div className="fixed flex justify-evenly bottom-14 w-1/2  py-3 rounded-3xl bg-white text-center left-1/4">
          {pictures.map((bglinks) => (
            <button className='bg-cyan-700 text-white px-5 rounded-full mx-8' key={bglinks.urlLink}>{bglinks.name}</button>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
