import React from 'react'

const ProductDetailsLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div>
        {children}
        <h4>ProductDetailsLayout</h4>
    </div>
  )
}

export default ProductDetailsLayout