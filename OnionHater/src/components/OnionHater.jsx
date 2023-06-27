import React from 'react'

export const OnionHater = () => {
  const handleChange = (e) => {
    const text = e.target.value

    if (text.toLowerCase().includes('cebolla')) {
      alert('ODIO LA CEBOLLA')
    }
  }

  return (
    <>
      <textarea onChange={handleChange} name="onion" id="text" cols="30" rows="10" />
    </>
  )
}