import React from 'react'
import '../Style/Container.css'

function container({property, value}) {
  return (
    <div className='container'> 
      {/* <div className='content'>
        <div className='property'>
          <p>{property.head1} </p>
          <p>{property.head2} </p>
          <p>{property.head3} </p>
          <p>{property.head4} </p>
        </div>
        <div className='value'>
          <p>: {value.v1} </p>
          <p>: {value.v2} </p>
          <p>: {value.v3} </p>
          <p>: {value.v4} </p>
        </div>
      </div> */}
      <div className='container_content'>
        
        <div className="entry">
          <p className='prop'>{property.head1} </p><p className='val'>: {value.v1} </p>
        </div>
        
        <div className="entry">
          <p className='prop'>{property.head2} </p><p className='val'>: {value.v2} </p>
        </div>
        
        <div className="entry">
          <p className='prop'>{property.head3} </p><p className='val'>: {value.v3} </p>
        </div>
        
        <div className="entry">
          <p className='prop'>{property.head4} </p><p className='val'>: {value.v4} </p>
        </div>
        
      </div>
    </div>
  )
}

export default container