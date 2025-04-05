import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <li>
            <Link href="/dashboard/users/1">
                <h1 className="text-red-500">User 1</h1> 
            </Link>
        </li>
        <li>
            <Link href="/dashboard/users/2">
                <h1 className="text-red-500">User 2</h1> 
            </Link>
        </li>
        <li>
            <Link href="/dashboard/users/3">
                <h1 className="text-red-500">User 3</h1> 
            </Link>
        </li>
        <li>
            <Link href="/dashboard/users/4">
                <h1 className="text-red-500">User 4</h1> 
            </Link>
        </li>
    </div>
  )
}

export default page