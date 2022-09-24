import FooterCard from "../FooterCard"
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';
import ReactStars from "react-rating-stars-component";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'

const ProductDetails = ({ price = "14.6", oldPrice = "23.3" }) => {
    return (
        <div className="py-12 bg-[#f5f5f5]">
            <div className="container ">
                <div className="bg-white p-7 rounded-2xl">
                    <div className="flex flex-wrap lg:flex-row flex-col lg:gap-0 gap-7">
                        <div className="lg:w-2/5 lg:border-r" >
                            <InnerImageZoom src="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?fit=800%2C800&ssl=1" zoomSrc="https://i0.wp.com/demo4.drfuri.com/farmart2/wp-content/uploads/sites/11/2020/02/04_4a.jpg?fit=800%2C800&ssl=1" zoomType="hover" fullscreenOnMobile={true} />
                        </div>
                        <div className="lg:w-2/5 w-full md:pl-10 pl-0">
                            <div className="text-color mb-5">
                                <a href="/">Home</a>
                                <span className="mx-2">/</span>
                                <a href="/">Shop</a>
                                <span className="mx-2">/</span>
                                <a href="/">Fruits</a>
                                <span className="mx-2">/</span>
                                <span className='text-title'>Soft Mochi & Galeto Ice Cream</span>
                            </div>
                            <h4 className='md:text-xl text-base text-orange font-bold mb-2'>MartFury</h4>
                            <h1 className='md:text-3xl text-title text-xl font-semibold mb-5'>Soft Mochi & Galeto Ice Cream</h1>

                            <div className="text-color text-xs flex items-center gap-2">
                                <ReactStars
                                    count={5}
                                    value={3.5}
                                    size={18}
                                    activeColor="#EFB338"
                                    edit={false}
                                    isHalf={true}
                                    emptyIcon={<BsStar />}
                                    halfIcon={<BsStarHalf />}
                                    filledIcon={<BsStarFill />}
                                />
                                (1 customer review)
                            </div>

                            <div className="my-3">
                                <span className="text-sm text-gray-400 mb-2">500g</span>
                                <div className="flex items-center gap-2">
                                    <span className={`text-xl font-bold ${oldPrice ? "text-orange" : "text-green"}`}>${price}</span>
                                    {oldPrice && (
                                        <span className="text-lg text-gray-400 line-through">${oldPrice}</span>
                                    )}
                                </div>
                            </div>
                            <div className="my-5 bg-[#ebfae9] w-fit px-3 py-2 border border-green rounded-lg">
                                Availability: <span className="text-green ml-1 font-bold">In stock</span>
                            </div>
                            <div className="border-t"></div>
                            <div className="my-5">
                                <span className="text-color pb-2 block text-sm">Quantity:</span>
                                <div className="flex gap-2">
                                    <div className="flex border">
                                        <button className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">-</button>
                                        <span className="w-10 text-center border border-[#e5e5e5] flex justify-center items-center">1</span>
                                        <button className="w-10 bg-[#f5f5f5] flex justify-center items-center font-bold">+</button>

                                    </div>
                                    <button className="btn-white bg-primary">Add to Cart</button>
                                </div>
                            </div>
                            <div className="border-t my-7">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-900"><span className="text-color">SKU: </span>#veg20967</p>
                                    <p className="text-gray-900"><span className="text-color">Brand: </span>mangogn</p>
                                    <p className="text-gray-900"><span className="text-color">Vendor: </span>MartFury</p>
                                    <p className="text-gray-900"><span className="text-color">Category: </span>Breakfast Cereals, Chocolate & Sweets, Crisps, Snacks & Nuts, Food Cupboard, Tins & Cans</p>
                                    <p className="text-gray-900"><span className="text-color">Tag: </span>Best seller</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/5 w-full">
                            <div className="bg-[#F3F3F3] px-5 py-7 rounded-md">
                                <FooterCard
                                    image="/icons/f_1.svg"
                                    title="Free Shipping"
                                    subtitle="For all orders over $200"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f_2.svg"
                                    title="1 & 1 Returns"
                                    subtitle="Cancellation after 1 day"
                                />
                                <div className="border-t my-5"></div>
                                <FooterCard
                                    image="/icons/f_3.svg"
                                    title="Secure Payment"
                                    subtitle="100% Gurantee secure payments"
                                />
                            </div>
                            <div className="bg-[#f5f5f5] px-5 mt-5 py-7 rounded-md">
                                <p className="font-bold text-title">Hotline Order:</p>
                                <span className="text-color">Mon - Fri: 7:00 am - 18:00PM</span>
                                <span className="text-xl md:text-2xl text-title font-bold block mt-5"> +970 978 - 6290</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails