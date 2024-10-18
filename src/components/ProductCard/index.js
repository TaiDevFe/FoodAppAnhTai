import { memo } from "react"

const ProductsCard = () => {
    return (
        <>
            <Link key={j} className="product-item">
             <img src={item.img} alt={item.name}></img>
             <p>{item.name}</p>
             <p className="product-price">{item.price}</p>
           </Link>
        </>
    )
}

export default memo(ProductsCard);