module.exports = (componentName) => ({
  content: `
import React from "react";
import { Story } from "@storybook/react/types-6-0";

import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "../${componentName}/${componentName}.types";

export default {
    title: "${componentName}",
    component: ${componentName},
    parameters: {
      docs: {
        description: {
          component: "",
        },
      },
    },
};

export const 認識 = () => <${componentName}  />;

`,
  extension: `.stories.tsx`,
});
