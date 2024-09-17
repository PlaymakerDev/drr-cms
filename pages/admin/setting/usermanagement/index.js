import React from "react";
import { Layout } from "@/components/layout";
import UserManagementScreen from "@/features/admin/setting/screen";

const SettingPage = (props) => {
  const {} = props;

  return (
      <Layout>
          <UserManagementScreen />
      </Layout>
  );
};

export default React.memo(SettingPage);
