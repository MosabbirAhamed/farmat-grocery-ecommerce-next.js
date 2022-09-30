import Image from "next/image";
import Link from "next/link";

const ProductCard = ({product}) => {
    const {name, image, price, weight, oldPrice} = product;

    const offCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
    }

  return (
    <Link href={"/products"}>
    <div className="product-card">
        {oldPrice && (
            <span className="bg-orange text-white text-xs absolute top-2 left-2 z-10 px-2 py-1 rounded-md">{offCalc()}% OFF</span>
        )}
        {/* Product Image */}
        <Image
            src={image}
            height={270}
            width={265}
            objectFit="contain"
        />
        {/* Product Details */}
        <div className="flex flex-col mt-2 gap-1 w-full">
            <h4 className="text-sm text-color font-bold">Farmart</h4>
            <h3 className="text-lg font-bold text-title truncate">{name}</h3>
            <span className="text-sm text-gray-400">{weight}</span>
            <div className="flex items-center gap-2">
                <span className={`text-base font-bold ${oldPrice ? "text-orange" : "text-green" }`}>${price}</span>
                {oldPrice && (
                    <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
                )}
            </div>
        </div>
    </div>

    </Link>
  )
}

export default ProductCard