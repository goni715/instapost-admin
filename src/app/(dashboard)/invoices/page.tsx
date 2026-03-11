import InvoiceList from "@/components/invoice/InvoiceList";

const InvoicesPage = () => {
  return (
    <>
      <div className="min-h-full bg-white rounded-md shadow-md p-4">
        <InvoiceList />
      </div>
    </>
  );
};

export default InvoicesPage;
