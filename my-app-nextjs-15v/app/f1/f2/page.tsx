import Link from 'next/link'
import React from 'react'

const F2Page = () => {
  return (
    <div>
        <h1>F2Page</h1>
        <Link href={"/f1"}>F1</Link>
        <br />
        <Link href={"/f4"}>F4</Link>
        </div>
  )
}

export default F2Page