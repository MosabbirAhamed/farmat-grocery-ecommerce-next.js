import BillingInfo from "../app/components/checkout/BillingInfo";
import YourOrder from "../app/components/checkout/YourOrder";
import Breadcrumb from "../app/components/shared/Breadcrumb";

const Checkout = () => {
  return (
    <main>
      <div className="bg-[#f5f5f5] p-5">
        <div className="mx-auto max-w-6xl">
          <Breadcrumb />
        </div>
      </div>

      <div className="p-5">
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="text-4xl text-center text-titel font-bold mb-10">
            Checkout
          </h1>
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="md:w-[60%]  w-full ">
              <BillingInfo />
            </div>
            <div className="md:w-[40%] w-full ">
              <YourOrder />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
