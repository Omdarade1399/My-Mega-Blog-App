import React from 'react'
import logoImage from "../Logoimage/—Pngtree—yellow lotus logo_874489.png"

function Logo({width = '200px'}) {
  return (
    <div><img src={logoImage} alt="" width={width}/></div>
  )
}

export default Logo