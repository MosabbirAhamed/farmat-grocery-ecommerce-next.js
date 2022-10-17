import ProductCard from '../Puoduct/ProductCard';
import SectionHeading from '../shared/SectionHeading';
import { DEALS } from '../../data/product.js'



const TodaysDeals = () => {
    return (
        <section className="pt-5">
            <div className="container">
                {/* TodaysDeals Heading */}
                <SectionHeading
                    title="Top Saver Today"
                    moreText="All Offers"
                />
                {/* TodaysDeals Slider */}
                <div className="flex gap-7 pdc overflow-x-auto no-scrollbar mt-5 pt-5 pb-14 pl-2 -ml-2">
                    {DEALS.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default TodaysDeals