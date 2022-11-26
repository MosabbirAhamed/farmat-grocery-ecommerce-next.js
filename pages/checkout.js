
import CheckoutContent from "../app/components/checkout/CheckoutContent";
import Breadcrumb from "../app/components/shared/Breadcrumb";
import SecureLayout from "../app/layout/SecureLayout copy";

const Checkout = () => {
  return (
    <SecureLayout>
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
          <CheckoutContent />
        </div>
      </div>
    </SecureLayout>
  );
};

export default Checkout;
