import React, {useEffect, useState} from 'react'
import {Loader, Card, FormField } from '../components'

const home = () => {
  const [loading, setloading] = useState(false)
  const [allPosts, setallPosts] = useState([null])
  return (
    <section className='max-w-7x1 mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>Community Logos</h1>
      </div>
    </section>
  )
}

export default home