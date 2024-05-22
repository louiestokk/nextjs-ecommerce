import React from 'react'

const NewCollection = () => {
  return (
    <section className='new-collection'>
        <div style={{marginRight:'0.1rem'}}>
            <img loading='lazy' src='/assets/images/new.png' alt='new fashion' className='new-collection-img'/>
        </div>
        <div style={{marginLeft:'0.1rem'}}>
        <img loading='lazy' src='/assets/images/colleection.png' alt='new collection fashion' className='new-collection-img'/>
        </div>
        
    </section>
  )
}

export default NewCollection