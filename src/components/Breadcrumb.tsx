import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "./Typography";
import type { BreadcrumbProps } from "./Breadcrumb.types";

const Sep: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="body2" style={{ margin: "0 8px" }}>
    {children}
  </Typography>
);

// v1 的三點省略圖示（hover 時多一條底線）
const dotsPath =
  "M1.946 16.182C2.45 16.182 2.87 15.79 2.87 15.216C2.87 14.642 2.45 14.222 1.946 14.222C1.442 14.222 1.022 14.642 1.022 15.216C1.022 15.79 1.442 16.182 1.946 16.182ZM5.84248 16.182C6.34648 16.182 6.76648 15.79 6.76648 15.216C6.76648 14.642 6.34648 14.222 5.84248 14.222C5.33848 14.222 4.91848 14.642 4.91848 15.216C4.91848 15.79 5.33848 16.182 5.84248 16.182ZM9.73897 16.182C10.243 16.182 10.663 15.79 10.663 15.216C10.663 14.642 10.243 14.222 9.73897 14.222C9.23497 14.222 8.81497 14.642 8.81497 15.216C8.81497 15.79 9.23497 16.182 9.73897 16.182Z";

const ThreeDots: React.FC<{ hover: boolean }> = ({ hover }) => (
  <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d={dotsPath} fill="#4B4B4B" />
    {hover && <path d="M0 18.1H11.685V18.8H0V18.1Z" fill="#4B4B4B" />}
  </svg>
);

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(function Breadcrumb(
  { maxItems, separator = "/", children, style, ...rest },
  ref,
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [hoverDots, setHoverDots] = React.useState(false);
  const items = React.Children.toArray(children);
  const collapsed = !!maxItems && items.length > maxItems;
  const tail = collapsed ? items.slice(items.length - maxItems + 1) : items;
  const hidden = collapsed ? items.slice(1, items.length - maxItems + 1) : [];

  const row = (node: React.ReactNode, isLast: boolean, key: React.Key) => (
    <div
      key={key}
      style={{ display: "flex", alignItems: "center", fontSize: 14, fontWeight: isLast ? 700 : 400 }}
    >
      {node}
      {!isLast && <Sep>{separator}</Sep>}
    </div>
  );

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", ...style }} {...rest}>
      {collapsed ? (
        <>
          <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
            {items[0]}
            <Sep>{separator}</Sep>
            <div
              data-testid="breadcrumb-ellipsis"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              onMouseEnter={() => setHoverDots(true)}
              onMouseLeave={() => setHoverDots(false)}
              style={{ cursor: "pointer" }}
            >
              <ThreeDots hover={hoverDots} />
            </div>
            <Sep>{separator}</Sep>
          </div>
          {tail.map((node, i) => row(node, i === tail.length - 1, i))}
        </>
      ) : (
        items.map((node, i) => row(node, i === items.length - 1, i))
      )}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {hidden.map((node, i) => {
          const el = node as React.ReactElement<{
            children?: React.ReactNode;
            href?: string;
            target?: string;
          }>;
          return (
            <MenuItem
              key={i}
              onClick={() => {
                const { href, target } = el.props;
                if (href) {
                  if (target === "_blank") window.open(href);
                  else window.location.href = href;
                }
                setAnchorEl(null);
              }}
            >
              {el.props.children}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
});

export default Breadcrumb;
