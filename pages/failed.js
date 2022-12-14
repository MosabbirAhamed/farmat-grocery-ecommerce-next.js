import FailedContent from "../app/components/order/FailedContent";

const Failed = () => {
  return (
    <main>
      <div className="p-5">
        <div className="mx-auto max-w-6xl mt-10">
          <h1 className="text-4xl text-center text-titel font-bold mb-10">Payment Failed :(</h1>
          <FailedContent />
        </div>
      </div>
    </main>
  );
};

export default Failed;
