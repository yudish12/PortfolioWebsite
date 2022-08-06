import React from 'react'
import CV from './assets/CV Yudish Chakrawarty 15914802720 CSE MAIT 9810870142.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
