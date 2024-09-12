import React from "react";
import { FormSearchUsersetting, TableReport, TableUsersetting } from "../components";

const ReportScreen = (props) => {
  const {} = props;

  return (
    <>
      {/* <section>
        <FormSearchUsersetting />
      </section> */}
      <section>
        <TableReport />
      </section>
    </>
  );
};

export default React.memo(ReportScreen);
