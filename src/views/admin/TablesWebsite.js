import CardTable from "components/Cards/CardTableWebsite.js";
export default function TablesWebsite() {
    return (
      <>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardTable />
          </div>
          {/* <div className="w-full mb-12 px-4">
            <CardTable color="dark" />
          </div> */}
        </div>
      </>
    );
}
