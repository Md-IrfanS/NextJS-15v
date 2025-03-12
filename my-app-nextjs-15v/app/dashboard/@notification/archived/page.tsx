import Card from '@/app/components/Card'
import Link from 'next/link'
import React from 'react'

const ArchivedPage = () => {
  return (
    <div>
      <Card>
      ArchivedPage Page
        <div>
        <Link href={"/dashboard"}>Default </Link>
      </div>
      </Card>      
    </div>
  )
}

export default ArchivedPage