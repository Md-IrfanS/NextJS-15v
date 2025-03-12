import React from 'react'

const PhotoLayout = ({children, modal}: Readonly<{children: React.ReactNode, modal: React.ReactNode}>) => {
  return (
    <div>
      {modal}
      {children}
    </div>
  )
}

export default PhotoLayout