import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  // EmailShareButton,
  EmailIcon,
  LineShareButton,
  LineIcon,
  // FacebookMessengerShareButton,
  FacebookMessengerIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TwitterIcon,
  TwitterShareButton,
  TelegramIcon,
  TelegramShareButton,
} from "react-share";
import { Button, Fade, Grid, IconButton, TextField } from "@material-ui/core";
import CopyToClipboard from "react-copy-to-clipboard";

import CheckIcon from "@material-ui/icons/Check";

import { SWAPShareProps } from "./SWAPShare.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

const SWAPShare: React.FC<SWAPShareProps> = ({
  url,
  size = 36,
  copyInputLabel = "複製網址",
  copyButtonText = "複製",
  copySuccessMessage = "成功複製網址，請轉貼至你想分享的地方",
  emailSubject = "",
  sharedContent = "",
}) => {
  const [sharedUrl, setSharedUrl] = useState("");
  const [csm, setCsm] = useState("");

  useEffect(() => {
    if (url) {
      setSharedUrl(url);
    } else {
      setSharedUrl(window.location.href);
    }
  }, []);

  const handleEmailOnClick = () => {
    /**
     * Relative issue: https://github.com/nygardk/react-share/issues/292
     */
    const email = encodeURI(`mailto:
    ?subject=${emailSubject}&body=${sharedContent}\n\n${sharedUrl}`);
    window.location.href = email;
  };

  const handleMessengerOnClick = () => {
    /**
     * Relative issue
     * https://github.com/nygardk/react-share/issues/288
     * https://stackoverflow.com/questions/34675419/share-url-in-facebook-messenger-from-web#
     */
    const appId = 549090209290719;
    const mobileDevide = document.documentElement.clientWidth < 960;
    const mobile =
      "fb-messenger://share?link=" +
      encodeURIComponent(`${sharedUrl}`) +
      `&app_id=` +
      encodeURIComponent(appId);

    const desktop = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(
      sharedUrl
    )}&redirect_uri=${encodeURIComponent(sharedUrl)}&app_id=${appId}`;
    window.open(mobileDevide ? mobile : desktop, "_blank");
  };

  return (
    <div>
      <SWAPShareWrap>
        <Grid container alignItems="center">
          {[
            {
              el: (
                <IconButton size="small" onClick={() => handleEmailOnClick()}>
                  <EmailIcon round size={size} iconFillColor="white" />
                </IconButton>
              ),
            },
            {
              el: (
                // <FacebookMessengerShareButton
                //   url={sharedUrl}
                //   appId="549090209290719"
                // >
                <IconButton
                  size="small"
                  onClick={() => handleMessengerOnClick()}
                >
                  <FacebookMessengerIcon round size={size} />
                </IconButton>
                // </FacebookMessengerShareButton>
              ),
            },
            {
              el: (
                <FacebookShareButton url={sharedUrl} quote={sharedContent}>
                  <IconButton size="small">
                    <FacebookIcon round size={size} />
                  </IconButton>
                </FacebookShareButton>
              ),
            },
            {
              el: (
                <LineShareButton url={sharedUrl} title={sharedContent}>
                  <IconButton size="small">
                    <LineIcon round size={size} />
                  </IconButton>
                </LineShareButton>
              ),
            },
            {
              el: (
                <WhatsappShareButton url={sharedUrl} title={sharedContent}>
                  <IconButton size="small">
                    <WhatsappIcon round size={size} />
                  </IconButton>
                </WhatsappShareButton>
              ),
            },
            {
              el: (
                <TwitterShareButton url={sharedUrl} title={sharedContent}>
                  <IconButton size="small">
                    <TwitterIcon round size={size} />
                  </IconButton>
                </TwitterShareButton>
              ),
            },
            {
              el: (
                <TelegramShareButton url={sharedUrl} title={sharedContent}>
                  <IconButton size="small">
                    <TelegramIcon round size={size} />
                  </IconButton>
                </TelegramShareButton>
              ),
            },
          ].map((item, index) => (
            <Grid item key={`share_btn_${index}`}>
              {item.el}
            </Grid>
          ))}
        </Grid>
        <SWAPSpace size="middle" />
        <TextField
          label={copyInputLabel}
          value={sharedUrl}
          variant="outlined"
          helperText={
            csm && csm.length > 0 ? (
              <Fade in>
                <Grid container alignItems="center" spacing={1} wrap="nowrap">
                  <Grid item>
                    <CheckIcon color="primary" fontSize="small" />
                  </Grid>
                  <Grid item>{csm}</Grid>
                </Grid>
              </Fade>
            ) : null
          }
          style={{ width: "100%" }}
          InputProps={{
            endAdornment: (
              <div>
                <CopyToClipboard
                  text={sharedUrl}
                  onCopy={() => {
                    setCsm("");
                    setTimeout(() => setCsm(copySuccessMessage), 200);
                  }}
                >
                  <div>
                    <Button>
                      <small>{copyButtonText}</small>
                    </Button>
                  </div>
                </CopyToClipboard>
              </div>
            ),
          }}
        />
      </SWAPShareWrap>
    </div>
  );
};

const SWAPShareWrap = styled.div`
  display: inline-block;
`;

export default SWAPShare;
