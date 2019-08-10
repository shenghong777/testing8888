import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div
    style={{
      background: '#fb8e7e',
      paddingTop: '15px',
      boxShadow: '2px 2px 10px 4px #F4F4F4 ',
      borderTop:'15px',
      borderBottom:'15px',
      lineHeight:'1px'
     
    }}
  >
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <li>
        <Link to="/" style={{
            color: 'black',
            textDecoration: 'no',
            textShadow: '1px 1px #f4f4f4',
            fontSize: '25px'        
          }}>Home</Link>
      </li>
      <li>
        <Link to="/about"style={{
            color: 'black',
            textDecoration: 'no',
            textShadow: '1px 1px #f4f4f4',
            fontSize: '25px'        
          }}>About</Link>
      </li>
      <li>
        <Link to="/services"style={{
            color: 'black',
            textDecoration: 'no',
            textShadow: '1px 1px #f4f4f4',
            fontSize: '25px'        
          }}>Services</Link>
      </li>
      <li>
        <Link to="/blog"style={{
            color: 'black',
            textDecoration: 'no',
            textShadow: '1px 1px #f4f4f4',
            fontSize: '25px'        
          }}>Blog</Link>
      </li>
    </ul>
  </div>
)

export default Menu
