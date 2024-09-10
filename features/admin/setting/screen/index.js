import React from "react";
import { FormSearchUsersetting, TableUsersetting } from "../components";

const UsersettingScreen = (props) => {
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

export default React.memo(UsersettingScreen);
