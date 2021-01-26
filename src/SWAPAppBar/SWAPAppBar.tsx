import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

import SWAPLogo from "../SWAPLogo/SWAPLogo";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

import { SWAPAppBarProps } from "./SWAPAppBar.types";

const SWAPAppBar: React.FC<SWAPAppBarProps> = ({
  logo,
  primaryButton,
  secondaryButton,
  navigations,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <SWAPAppBarWrap>
        <AppBar
          position="fixed"
          color="transparent"
          elevation={1}
          style={{ background: "white" }}
        >
          <Toolbar>
            <Container maxWidth="md">
              <SWAPSpace size="small" />
              <Grid
                container
                alignItems="center"
                justify="space-between"
                wrap="nowrap"
              >
                <Grid item style={{ flexGrow: 1, flexBasis: "auto" }}>
                  <Grid container spacing={3} alignItems="center" wrap="nowrap">
                    <Grid
                      item
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {logo ? logo : <SWAPLogo size="large" />}
                    </Grid>
                    {/**電腦版顯示 */}
                    {navigations &&
                      navigations.length > 0 &&
                      navigations.map((item, index) => (
                        <Grid item key={`nav_${index}`} className="mobile_hide">
                          <Button
                            onClick={() => item.onClick()}
                            disabled={item.disabled}
                          >
                            <Typography variant="body2">
                              {item.title}
                            </Typography>
                          </Button>
                        </Grid>
                      ))}
                  </Grid>
                </Grid>
                <Grid item style={{ flexGrow: 1, flexBasis: "auto" }}>
                  {/**電腦版顯示 */}
                  <Grid
                    container
                    spacing={1}
                    justify="flex-end"
                    alignItems="center"
                    className="mobile_hide"
                  >
                    <Grid item>
                      {secondaryButton &&
                      secondaryButton.title &&
                      secondaryButton.title.length > 0 ? (
                        <Button
                          color="primary"
                          variant="outlined"
                          onClick={() => secondaryButton.onClick()}
                          disabled={secondaryButton.disabled}
                        >
                          {secondaryButton.title}
                        </Button>
                      ) : null}
                    </Grid>
                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => primaryButton.onClick()}
                        disabled={primaryButton.disabled}
                      >
                        {primaryButton.title}
                      </Button>
                    </Grid>
                  </Grid>
                  {/**手機版顯示 */}
                  <Grid container justify="flex-end">
                    <Grid item>
                      <IconButton
                        onClick={(e) => handleClick(e)}
                        aria-label="menue"
                        color="primary"
                        className="mobile_show"
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={() => handleClose()}
                      >
                        {navigations &&
                          navigations.length > 0 &&
                          navigations.map((item, index) => (
                            <MenuItem
                              key={`mobile_page_${index}_pages`}
                              disabled={item.disabled}
                              onClick={() => item.onClick()}
                            >
                              {item.title}
                            </MenuItem>
                          ))}
                        <SWAPSpace size="small" />
                        <Divider />
                        <SWAPSpace size="small" />
                        {secondaryButton &&
                        secondaryButton.title &&
                        secondaryButton.title.length > 0 ? (
                          <MenuItem
                            disabled={secondaryButton.disabled}
                            onClick={() => secondaryButton.onClick()}
                          >
                            {secondaryButton.title}
                          </MenuItem>
                        ) : null}
                        {primaryButton &&
                        primaryButton.title &&
                        primaryButton.title.length > 0 ? (
                          <MenuItem
                            disabled={primaryButton.disabled}
                            onClick={() => primaryButton.onClick()}
                          >
                            {primaryButton.title}
                          </MenuItem>
                        ) : null}
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <SWAPSpace size="small" />
            </Container>
          </Toolbar>
        </AppBar>
      </SWAPAppBarWrap>
    </div>
  );
};

const SWAPAppBarWrap = styled.div`
  .mobile_hide {
    @media screen and (max-width: 960px) {
      display: none;
    }
  }
  .mobile_show {
    display: none;
    @media screen and (max-width: 960px) {
      display: block;
    }
  }
`;

export default SWAPAppBar;
