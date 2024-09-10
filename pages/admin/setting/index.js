import React from "react";
import { Layout } from "@/components/layout";
import UsersettingScreen from "@/features/admin/setting/screen";

const SettingPage = (props) => {
  const {} = props;

  return (
      <Layout>
          <UsersettingScreen />
      </Layout>
  );
};

export default React.memo(SettingPage);
