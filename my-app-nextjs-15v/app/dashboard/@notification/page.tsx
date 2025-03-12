import Card from '@/app/components/Card'
import Link from 'next/link'
import React from 'react'

const NotificationSlugPage = () => {
  return (
    <div>
      <Card>
        NotificationSlug Page
        <div>
        <Link href={"/dashboard/archived"}>Archived </Link>
      </div>
      </Card>      
    </div>
  )
}

export default NotificationSlugPage