"use client"

import { useState } from "react"

const Author = ({authorName}) => {
    const[showAuthor, setShowAuthor] = useState(false)
  return (
    <div>
        <p>{showAuthor? authorName : ''}</p>
        <button onClick={()=>setShowAuthor(true)} className="btn btn-primary">Show Author</button>
    </div>
  )
}

export default Author