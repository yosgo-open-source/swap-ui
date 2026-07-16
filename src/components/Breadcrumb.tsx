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

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(function Breadcrumb(
  { maxItems, separator = "/", children, style, ...rest },
  ref,
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
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
              style={{ cursor: "pointer", fontWeight: 700 }}
            >
              ⋯
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
