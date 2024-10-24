import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='border-solid flex flex-col text-cennter rounded-2xl py-20 px-8 border-transparent'>
    <div>
      <h3 className='text-xl font-mono-bold py-1'>{props.heading}</h3><br />
      <p>{props.text}</p>
    </div>
  </div>
  )
}
export default AboutCard
