import Image from "next/image";
import Link from "next/link";
import { BsFillCartCheckFill, BsFillCartPlusFill } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, selectItems } from "../../redux/slices/basketSlice";

const exists = false;

const ProductCard = ({ product }) => {
    const { id, name, image, price, weight, oldPrice } = product;
    const cartItems = useSelector(selectItems)
    const dispatch = useDispatch()

    const offCalc = () => {
        const off = ((oldPrice - price) / oldPrice) * 100
        return Math.round(off)
    }

    const chekItemExist = (id) => {
        const find = cartItems.filter(item => id === item.id)
        return !!find.length
    }
    const addtoBasket = (product) => {
        dispatch(addItem({
            ...product,
            quantity: 1
        }))
    }
    const removeItemFromCart = (product) => {
        dispatch(removeItem(id))
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
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-sm text-gray-400">{weight}</span>
                            <div className="flex items-center gap-2">
                                <span className={`text-base font-bold ${oldPrice ? "text-orange" : "text-green"}`}>${price}</span>
                                {oldPrice && (
                                    <span className="text-sm text-gray-400 line-through">${oldPrice}</span>
                                )}
                            </div>
                        </div>
                        <div>
                            {chekItemExist(id) ? (<button onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                removeItemFromCart(id)

                            }} className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center">
                                <BsFillCartCheckFill size={18} />
                            </button>
                            ) : (<button onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                addtoBasket(product)
                            }} className="bg-gray-600 text-white rounded-full w-10 h-10 flex justify-center items-center">
                                <BsFillCartPlusFill size={18} />

                            </button>)}
                        </div>
                    </div>
                </div>
            </div>

        </Link>
    )
}

export default ProductCard