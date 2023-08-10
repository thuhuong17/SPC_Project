import CardTableDonation from "../../components/Cards/CardTableDonation";

export default function Donation() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            <CardTableDonation />
          </div>
        </div>
      </div>
    </>
  );
}
