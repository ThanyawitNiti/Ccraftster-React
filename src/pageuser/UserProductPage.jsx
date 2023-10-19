
import { useProductContext } from '../hooks/product-context-hook'
import UserCard from './card/UserCard'

export default function UserProductPage() {
    const {showProduct} = useProductContext()
  return (
       <div className="flex justify-center gap-5 flex-wrap">
      {showProduct.map((el) => (
        <UserCard key={el.id} productObj={el} />
      ))}
    </div>
  )
}
