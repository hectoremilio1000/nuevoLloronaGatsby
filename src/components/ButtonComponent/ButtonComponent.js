import { Link } from 'gatsby';
import React from 'react'

function ButtonComponent({titulo, enlace}) {
  return <>
    <Link to={enlace} className="contenedorA">
      <div className='buttonComponent'>
        <p className='buttonText'>{ titulo}</p>
</div>
    </Link>
  </>
}

export default ButtonComponent;