import * as React from 'react'
import SVGProps from './SVGProps'

const Error  = ({ width = 40, height = 40 }: SVGProps) => (
  <svg width={width} height={height} role="img" aria-labelledby="error-svg">
    <title id="error-svg">Zonal logo</title>
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
)

export default Error