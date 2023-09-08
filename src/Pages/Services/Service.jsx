import React from "react";
import PageHeader from "../../Components/Box/PageHeader";
import ServiceBox from "../../Components/Box/ServiceBox";

export default function Service() {
  return (
    <>
      <PageHeader pagename={"service"} />
      <p className="text-white p-4">
        Creative team is a team of individuals supporting a company or
        organization with their creative skills
      </p>
      <div class="all_service_box">
        <ServiceBox
          servicenumber={"1"}
          servicename={"Web development"}
          servicedes={"this will be your service description"}
        />
        <ServiceBox
          servicenumber={"2"}
          servicename={"App development"}
          servicedes={"this will be your service description"}
        />
        <ServiceBox
          servicenumber={"3"}
          servicename={"Graphic design"}
          servicedes={"this will be your service description"}
        />
        <ServiceBox
          servicenumber={"4"}
          servicename={"SEO"}
          servicedes={"this will be your service description"}
        />
        <ServiceBox
          servicenumber={"5"}
          servicename={"Digital merketing"}
          servicedes={"this will be your service description"}
        />
        <ServiceBox
          servicenumber={"6"}
          servicename={"Video editing"}
          servicedes={"this will be your service description"}
        />
      </div>
    </>
  );
}
