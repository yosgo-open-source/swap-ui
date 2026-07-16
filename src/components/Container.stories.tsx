import type { Meta, StoryObj } from "@storybook/react-vite";
import Container from "./Container";

const meta: Meta<typeof Container> = { title: "Components/Container", component: Container };
export default meta;
type Story = StoryObj<typeof Container>;

export const MaxWidths: Story = {
  render: () => (
    <>
      {(["lg", "xl", "xxl"] as const).map((m) => (
        <Container key={m} maxWidth={m}>
          <div style={{ background: "#E6E9F8", padding: 8, marginBottom: 8, textAlign: "center" }}>
            maxWidth={m}
          </div>
        </Container>
      ))}
    </>
  ),
};
