import React from "react";
import { Layout } from "@/components/layout";
import CreateScreen from "@/features/admin/setting/create/screen";

const SettingUserPage = (props) => {
  const {} = props;

  return (
      <Layout>
          <CreateScreen />
      </Layout>
  );
};

export default React.memo(SettingUserPage);
