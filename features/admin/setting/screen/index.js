import React from "react";
import { FormSearchUsersetting, TableUsersetting } from "../components";

const UserManagementScreen = (props) => {
  const {} = props;

  return (
    <>
      <section>
        <FormSearchUsersetting />
      </section>
      <section>
        <TableUsersetting />
      </section>
    </>
  );
};

export default React.memo(UserManagementScreen);
