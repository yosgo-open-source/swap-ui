import React, { useState } from "react";
import Menu from "../Menu/Menu";
import MenuItem from "../Menu/MenuItem";
import Typography from "../Typography/Typography";
import { BreadcrumbProps } from "./Breadcrumb.types";

const Breadcrumb: React.FC<BreadcrumbProps> = (props): React.ReactElement => {
  const { maxItems, separator, children, ...other } = props;
  const [isHoverThreeDots, setIsHoverThreeDots] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleThreeDotsClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleThreeDotsClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }} {...other}>
      {maxItems && children?.length > maxItems ? (
        /**隱藏內容 */
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {children[0]}
            <Typography variant="body2" style={{ margin: "0 8px" }}>
              {separator ? separator : "/"}
            </Typography>
            <div
              onClick={handleThreeDotsClick}
              onMouseEnter={() => setIsHoverThreeDots(true)}
              onMouseLeave={() => setIsHoverThreeDots(false)}
              style={{ cursor: "pointer" }}
            >
              {isHoverThreeDots ? icon_threedots_hover : icon_threedots}
            </div>
            <Typography variant="body2" style={{ margin: "0 8px" }}>
              {separator ? separator : "/"}
            </Typography>
          </div>
          {children
            .slice(children?.length - maxItems + 1)
            .map((i: any, index) => {
              return (
                <div
                  key={Math.random().toString(36).substr(2)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: 14,
                    fontWeight: index + 1 === children?.length ? 700 : 400,
                  }}
                >
                  {i}
                  {index + 1 !== maxItems - 1 && (
                    <Typography variant="body2" style={{ margin: "0 8px" }}>
                      {separator ? separator : "/"}
                    </Typography>
                  )}
                </div>
              );
            })}
        </>
      ) : (
        children?.map((i: any, index) => {
          return (
            <div
              key={Math.random().toString(36).substr(2)}
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: 14,
                fontWeight: index + 1 === children?.length ? 700 : 400,
              }}
            >
              {i}
              {index + 1 !== children?.length && (
                <Typography variant="body2" style={{ margin: "0 8px" }}>
                  {separator ? separator : "/"}
                </Typography>
              )}
            </div>
          );
        })
      )}
      {/**隱藏內容的Menu */}
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleThreeDotsClose}
        anchorOrigin={{ vertical: "bottom", horizontal: -16 }}
        getContentAnchorEl={null}
      >
        {children?.slice(1, children?.length - maxItems + 1).map((i: any) => {
          const content = i.props.children;
          const href = i.props.href;
          const target = i.props.target;
          console.log(target);
          return (
            <MenuItem
              key={Math.random().toString(36).substr(2)}
              onClick={() => {
                if (target && target === "_blank") {
                  window.open(href);
                } else {
                  window.location.href = href;
                }
              }}
            >
              {content}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

const icon_threedots = (
  <svg
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.946 16.182C2.45 16.182 2.87 15.79 2.87 15.216C2.87 14.642 2.45 14.222 1.946 14.222C1.442 14.222 1.022 14.642 1.022 15.216C1.022 15.79 1.442 16.182 1.946 16.182ZM5.84248 16.182C6.34648 16.182 6.76648 15.79 6.76648 15.216C6.76648 14.642 6.34648 14.222 5.84248 14.222C5.33848 14.222 4.91848 14.642 4.91848 15.216C4.91848 15.79 5.33848 16.182 5.84248 16.182ZM9.73897 16.182C10.243 16.182 10.663 15.79 10.663 15.216C10.663 14.642 10.243 14.222 9.73897 14.222C9.23497 14.222 8.81497 14.642 8.81497 15.216C8.81497 15.79 9.23497 16.182 9.73897 16.182Z"
      fill="#4B4B4B"
    />
  </svg>
);

const icon_threedots_hover = (
  <svg
    width="12"
    height="20"
    viewBox="0 0 12 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.946 16.182C2.45 16.182 2.87 15.79 2.87 15.216C2.87 14.642 2.45 14.222 1.946 14.222C1.442 14.222 1.022 14.642 1.022 15.216C1.022 15.79 1.442 16.182 1.946 16.182ZM5.84248 16.182C6.34648 16.182 6.76648 15.79 6.76648 15.216C6.76648 14.642 6.34648 14.222 5.84248 14.222C5.33848 14.222 4.91848 14.642 4.91848 15.216C4.91848 15.79 5.33848 16.182 5.84248 16.182ZM9.73897 16.182C10.243 16.182 10.663 15.79 10.663 15.216C10.663 14.642 10.243 14.222 9.73897 14.222C9.23497 14.222 8.81497 14.642 8.81497 15.216C8.81497 15.79 9.23497 16.182 9.73897 16.182Z"
      fill="#4B4B4B"
    />
    <path d="M0 18.1H11.685V18.8H0V18.1Z" fill="#4B4B4B" />
  </svg>
);

export default Breadcrumb;
