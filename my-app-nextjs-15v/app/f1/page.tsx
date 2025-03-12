import React from 'react'
import Link from 'next/link'
const F1Page = () => {
  return (
    <div>
        <h1>F1Page</h1>
        <Link href={"/f1/f2"}>F2</Link>
        <br />
        <Link href={"/f3"}>F3</Link>
    </div>
  )
}

export default F1Page