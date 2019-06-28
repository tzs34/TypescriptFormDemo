import * as React from 'react'
import SVGProps from './SVGProps'

const Success = ({ width = 40, height = 40 }: SVGProps) => (
  <svg width={width} height={height} role="img" aria-labelledby="success-svg">
    <title id="error-svg">Success icon</title>
    <path fill="none" d="M0 0h24v24H0V0z" />
    <path d="M19.77 5.03l1.4 1.4L8.43 19.17l-5.6-5.6 1.4-1.4 4.2 4.2L19.77 5.03m0-2.83L8.43 13.54l-4.2-4.2L0 13.57 8.43 22 24 6.43 19.77 2.2z" />
  </svg>
)

export default Success
