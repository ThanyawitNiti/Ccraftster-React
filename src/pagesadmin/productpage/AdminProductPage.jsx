import React from 'react'
import { useAdminContext } from '../../hooks/admin-context-hook'

export default function AdminProductPage() {
    const {allItem} =useAdminContext()
  return (
    <div className="flex justify-center gap-5 flex-wrap">
  {allItem.map((el) => (
     <Card key={el.id} productObj={el} />
   ))}
  </div>
  )
}
