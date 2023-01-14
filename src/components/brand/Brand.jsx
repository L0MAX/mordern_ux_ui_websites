import React from 'react'
import './brand.css'
import { google, slack, atlassian, dropbox, shopify } from './imports'

const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
    <div>
      <img src={google} alt='files'/>
    </div>
    <div>
      <img src={slack} alt='files'/>
    </div>
    <div>
      <img src={atlassian} alt='files'/>
    </div>
    <div>
      <img src={dropbox} alt='files'/>
    </div>
    <div>
      <img src={shopify} alt='files'/>
    </div>
    </div>
  )
}

export default Brand