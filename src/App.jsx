

import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = blog => {
    setBookmarks([...bookmarks, blog]);
  }

  return (
    <>
      <Header></Header>

      <main className='md:flex max-w-4xl mx-auto'>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>



    </>
  )
}

export default App
