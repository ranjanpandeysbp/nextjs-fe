'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const ContactDetail = ({params}) => {
    const searchParams = useSearchParams()
    const{id} = params;
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    console.log(id)
    console.log(name)
    console.log(age)
  return (
    <div>ContactDetail {name}</div>
  )
}

export default ContactDetail