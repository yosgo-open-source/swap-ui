import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import SWAPLogo from "./SWAPLogo";

const meta: Meta<typeof SWAPLogo> = { title: "Display/SWAPLogo", component: SWAPLogo };
export default meta;
type Story = StoryObj<typeof SWAPLogo>;

export const Variants: Story = {
  render: () => (
    <Stack spacing={3}>
      <SWAPLogo />
      <SWAPLogo black />
      <SWAPLogo iconOnly />
      <SWAPLogo business />
      <SWAPLogo business chinese />
      <Box sx={{ p: 2, backgroundColor: "#2D2D2D", width: "fit-content" }}>
        <Stack direction="row" spacing={3}>
          <SWAPLogo dark />
          <SWAPLogo black dark />
        </Stack>
      </Box>
    </Stack>
  ),
};

export const Playground: Story = {
  parameters: { controls: { include: ["business", "chinese", "black", "iconOnly", "dark", "size"] } },
  args: { business: false, chinese: false, black: false, iconOnly: false, dark: false, size: "middle" },
  argTypes: {
    size: { control: "text", description: "small/middle/large 或數字（px）或 CSS 長度" },
  },
};
