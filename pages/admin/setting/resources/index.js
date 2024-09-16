import React from "react";
import { Layout } from "@/components/layout";
import ResourcesScreen from "@/features/admin/setting/resources/srceen";

const ResourcesPage = (props) => {
  const {} = props;

  return (
      <Layout>
          <ResourcesScreen />
      </Layout>
  );
};

export default React.memo(ResourcesPage);
