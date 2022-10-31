import React from 'react'

const Pagination = ({onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

  return (
    <nav>
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <button className='page-link' onClick={handlePrevious}>Anterior</button>
            </li>
            <li className='page-item'>
                <button className='page-link' onClick={handleNext}>Siguiente</button>
            </li>
        </ul>
    </nav>
  )
}

export default Pagination