import CartAction from "../app/components/Cart/CartAction"
import CartTable from "../app/components/Cart/CartTable"
import Breadcrumb from "../app/components/shared/Breadcrumb"


const Cart = () => {
  return (
    <main>
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb />
        </div>
      </div>

      <div className="p-5">
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="text-4xl text-center text-titel font-bold mb-10">Cart</h1>
          <CartTable/>
          <CartAction />
        </div>
      </div>
    </main>
  )
}

export default Cart