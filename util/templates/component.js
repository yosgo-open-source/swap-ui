module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";
import styled from "styled-components";

import { ${componentName}Props } from "./${componentName}.types";


const ${componentName}: React.FC<${componentName}Props> = ({ foo }) => {
  return (
    <div>
      <${componentName}Wrap>
        {foo}
      </${componentName}Wrap>
    </div>
  );
}

const ${componentName}Wrap = styled.div;

export default ${componentName};

`,
  extension: `.tsx`,
});
