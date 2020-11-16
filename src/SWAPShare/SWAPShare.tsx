import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  EmailIcon,
  LineShareButton,
  LineIcon,
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
import { Grid } from "@material-ui/core";

import { SWAPShareProps } from "./SWAPShare.types";

const SWAPShare: React.FC<SWAPShareProps> = ({
  url,
  size = 36,
  emailSubject = "",
  sharedContent = "",
}) => {
  const [sharedUrl, setSharedUrl] = useState("");

  useEffect(() => {
    if (url && url.length > 0) {
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
    const mobileDevide = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
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
                <EmailIcon
                  className="swap_share_icon"
                  round
                  size={size}
                  iconFillColor="white"
                  onClick={() => handleEmailOnClick()}
                />
              ),
            },
            {
              el: (
                <FacebookMessengerIcon
                  className="swap_share_icon"
                  round
                  size={size}
                  onClick={() => handleMessengerOnClick()}
                />
              ),
            },
            {
              el: (
                <FacebookShareButton url={sharedUrl} quote={sharedContent}>
                  <FacebookIcon round size={size} className="swap_share_icon" />
                </FacebookShareButton>
              ),
            },
            {
              el: (
                <LineShareButton url={sharedUrl} title={sharedContent}>
                  <LineIcon round size={size} className="swap_share_icon" />
                </LineShareButton>
              ),
            },
            {
              el: (
                <WhatsappShareButton url={sharedUrl} title={sharedContent}>
                  <WhatsappIcon round size={size} className="swap_share_icon" />
                </WhatsappShareButton>
              ),
            },
            {
              el: (
                <TwitterShareButton url={sharedUrl} title={sharedContent}>
                  <TwitterIcon round size={size} className="swap_share_icon" />
                </TwitterShareButton>
              ),
            },
            {
              el: (
                <TelegramShareButton url={sharedUrl} title={sharedContent}>
                  <TelegramIcon round size={size} className="swap_share_icon" />
                </TelegramShareButton>
              ),
            },
          ].map((item, index) => (
            <Grid item key={`share_btn_${index}`}>
              {item.el}
            </Grid>
          ))}
        </Grid>
      </SWAPShareWrap>
    </div>
  );
};

const SWAPShareWrap = styled.div`
  display: inline-block;
  .swap_share_icon {
    display: inline-block;
    margin: 0 6px 0 0;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
    outline: 0px;
    &:hover {
      transform: scale(1.09);
      box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    }
  }
`;

export default SWAPShare;
