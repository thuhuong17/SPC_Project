import CardChartDonation from "components/Cards/CardChartDonation";
import CardTableDonation from "components/Cards/CardTableDonation";
import { useState } from "react";
import { BsGraphDown } from "react-icons/bs";

export default function Donation() {
  const [tableLayout, setTableLayout] = useState(true);
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4">
          <div className="tableStyle">
            {tableLayout ? (
              <CardTableDonation
                onChangeLayoutClick={() => setTableLayout(false)}
              />
            ) : (
              <CardChartDonation
                onChangeLayoutClick={() => setTableLayout(true)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
