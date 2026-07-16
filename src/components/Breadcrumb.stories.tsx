import type { Meta, StoryObj } from "@storybook/react-vite";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const meta: Meta<typeof Breadcrumb> = { title: "Navigation/Breadcrumb", component: Breadcrumb };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  render: () => (
    <Breadcrumb>
      {[
        <BreadcrumbItem key="1" href="#">
          首頁
        </BreadcrumbItem>,
        <BreadcrumbItem key="2" href="#">
          會員中心
        </BreadcrumbItem>,
        <BreadcrumbItem key="3" last>
          請款單
        </BreadcrumbItem>,
      ]}
    </Breadcrumb>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Breadcrumb maxItems={3}>
      {[
        <BreadcrumbItem key="1" href="#">
          首頁
        </BreadcrumbItem>,
        <BreadcrumbItem key="2" href="#">
          會員中心
        </BreadcrumbItem>,
        <BreadcrumbItem key="3" href="#">
          請款
        </BreadcrumbItem>,
        <BreadcrumbItem key="4" href="#">
          2026
        </BreadcrumbItem>,
        <BreadcrumbItem key="5" last>
          七月帳單
        </BreadcrumbItem>,
      ]}
    </Breadcrumb>
  ),
};

export const Playground: Story = {
  args: { maxItems: 3, separator: "/" },
  render: (args) => (
    <Breadcrumb {...args}>
      {[
        <BreadcrumbItem key="1" href="#">首頁</BreadcrumbItem>,
        <BreadcrumbItem key="2" href="#">會員中心</BreadcrumbItem>,
        <BreadcrumbItem key="3" href="#">請款</BreadcrumbItem>,
        <BreadcrumbItem key="4" href="#">2026</BreadcrumbItem>,
        <BreadcrumbItem key="5" last>七月帳單</BreadcrumbItem>,
      ]}
    </Breadcrumb>
  ),
};
