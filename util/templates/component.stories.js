module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

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
