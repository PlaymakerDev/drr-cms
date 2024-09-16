import React from "react";
import { Layout } from "@/components/layout";
import UserCreateScreen from "@/features/admin/setting/create/screen";

const SettingUserPage = (props) => {
  const {} = props;

  return (
      <Layout>
          <UserCreateScreen />
      </Layout>
  );
};

export default React.memo(SettingUserPage);
