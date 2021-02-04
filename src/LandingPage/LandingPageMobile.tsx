import React from "react";
import styled from "styled-components";
import Typed from "react-typed";

import { Box, Divider, useTheme } from "@material-ui/core";

import SWAPLogo from "../SWAPLogo/SWAPLogo";
import { LandingPageMobileProps } from "./LandingPageMobile.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import AppBar from "../AppBar/AppBar";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

import heroImg from "./img/Frame 367.png";
import logo_1 from "./img/appworks.png";
import logo_2 from "./img/SLP.png";
import logo_3 from "./img/aws activate.png";
import logo_4 from "./img/shopify.png";
import logo_5 from "./img/AWS.png";
import logo_6 from "./img/startup stadium.png";
import logo_7 from "./img/LCS.png";
import painPointicon from "./img/Frame 399.svg";
import topWave_mobile from "./img/Top wave_mobile.svg";
import bottomWave_mobile from "./img/Bottom Wave_mobile.svg";
import dotright from "./img/Dotright.svg";
import howItWorksIcon from "./img/Lightbulb Filled.svg";
import howItWorksImg from "./img/how SWAP works.svg";
import valuePropBackground_mobile from "./img/mobile.svg";
import hightLightIconLeft from "./img/Frame 392left.svg";
import hightLightIconMiddle from "./img/Frame 392middle.svg";
import hightLightIconRight from "./img/Frame 392right.svg";
import comparisonImg_mobile from "./img/Frame 471.png";
import userBaseTopWave_mobile from "./img/Vector6.svg";
import socialProofPic1_mobile from "./img/Avatar4_mobile.png";
import socialProofPic2_mobile from "./img/Avatar3_mobile.png";
import socialProofPic3_mobile from "./img/Avatar2_mobile.png";
import socialProofPic4_mobile from "./img/Avatar_mobile.png";
import featureImgTop from "./img/Highlight_01.png";
import featureImgMiddle from "./img/Highlight_02.png";
import featureImgBottom from "./img/Highlight_03.png";
import qAIcon from "./img/Frame 417.png";
import socialProofIcon3 from "./img/Frame 379.png";
import socialProofIcon4 from "./img/Frame 380.png";

const LandingPageMobile: React.FC<LandingPageMobileProps> = ({
  hero,
  logos,
  hightLight,
  painPoints,
  howItWorks,
  valueProp,
  comparison,
  userBase,
  socialProof,
  qA,
  feature,
  footer,
}) => {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.black.white }}>
      <SWAPTheme>
        <LandingPageMobileWrap>
          {/* Hero */}
          {hero ? (
            <Box width="100%">
              <AppBar />
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                height="100%"
                marginTop={7}
                padding={3}
              >
                <img
                  src={heroImg}
                  width="100%"
                  style={{
                    boxShadow: theme.boxShadow.xl,
                    borderRadius: theme.borderRadius.l,
                  }}
                />
                <Box display="flex" marginTop={3}>
                  <Typography variant="h4">自由工作者的</Typography>
                  <Typography variant="h4" color="primary400">
                    財務管理平台
                  </Typography>
                </Box>
                <Typography
                  style={{
                    fontSize: 18,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    marginTop: 8,
                  }}
                >
                  <Typed
                    strings={["收款、報稅、開發票，通通一站搞定"]}
                    loop
                    typeSpeed={120}
                  />
                </Typography>
                <Box width="100%">
                  <Button
                    fullWidth
                    size="medium"
                    variant="primary"
                    onClick={() => {}}
                    style={{ marginTop: 24 }}
                  >
                    馬上註冊試用
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: 7 }}
                    >
                      <path
                        d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                        fill="white"
                      />
                    </svg>
                  </Button>
                  <Button
                    fullWidth
                    size="medium"
                    variant="secondary"
                    onClick={() => {}}
                    style={{ marginTop: 8 }}
                  >
                    我有帳號，我要登入
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : null}
          {/* Logos */}
          {logos ? (
            <>
              <Box
                display="flex"
                alignItems="center"
                width="100%"
                height={88}
                style={{ overflow: "scroll" }}
              >
                <img
                  src={logo_1}
                  style={{ maxWidth: 80, marginRight: 24, marginLeft: 28 }}
                  width="100%"
                />
                <img
                  src={logo_2}
                  style={{ maxWidth: 80, marginRight: 24 }}
                  width="100%"
                />
                <img
                  src={logo_3}
                  style={{ maxWidth: 80, marginRight: 24 }}
                  width="100%"
                />
                <img
                  src={logo_4}
                  style={{ maxWidth: 80, marginRight: 24 }}
                  width="100%"
                />
                <img
                  src={logo_5}
                  style={{ maxWidth: 80, marginRight: 24 }}
                  width="100%"
                />
                <img
                  src={logo_6}
                  style={{ maxWidth: 80, marginRight: 24 }}
                  width="100%"
                />
                <img
                  src={logo_7}
                  style={{ maxWidth: 80, marginRight: 28 }}
                  width="100%"
                />
              </Box>

              <Divider />
            </>
          ) : null}
          {painPoints ? (
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
              padding="24px 47.5px 48px 47.5px"
            >
              <Box textAlign="center">
                <Typography variant="h5">
                  身為自由工作者，
                  <br />
                  你有以下這樣的困擾嗎？
                </Typography>
              </Box>
              <img src={painPointicon} width="100%" style={{ marginTop: 48 }} />
              <Typography
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  marginTop: 24,
                  textAlign: "center",
                }}
              >
                業主要求開發票
                <br />
                找人代開太貴也欠人情
              </Typography>
              <img src={painPointicon} width="100%" style={{ marginTop: 48 }} />
              <Typography
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  marginTop: 24,
                  textAlign: "center",
                }}
              >
                業主請你開發票
                <br />
                需要去跟別人借
              </Typography>
              <img src={painPointicon} width="100%" style={{ marginTop: 48 }} />
              <Typography
                style={{
                  fontSize: 20,
                  lineHeight: 1.6,
                  marginTop: 24,
                  textAlign: "center",
                }}
              >
                剛開始接案案量不夠
                <br />
                開公司成本又太高
              </Typography>
            </Box>
          ) : null}
          {hightLight ? (
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <img src={topWave_mobile} width="100%" />
              <Box
                // height={582}
                width="100%"
                style={{
                  backgroundColor: theme.primary.primary100,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                padding="36.5px 24px 24.5px 24px"
                overflow="hidden"
                position="relative"
              >
                {/* Dot */}
                <img
                  src={dotright}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: -65,
                    zIndex: 1,
                  }}
                />
                {/* Main */}
                <Box
                  boxShadow={theme.boxShadow.xl}
                  borderRadius={theme.borderRadius.l}
                  style={{ backgroundColor: theme.black.white, zIndex: 2 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  width="100%"
                  padding="40px 0px 64px 0px"
                >
                  <Typography variant="h6">
                    遇見你真好，就讓 SWAP 協助你！
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ marginTop: 12 }}
                    color="black800"
                  >
                    透過 SWAP 平台，你可以⋯
                  </Typography>
                  <img
                    src={hightLightIconLeft}
                    width={64}
                    style={{ marginTop: 48 }}
                  />
                  <Typography variant="h6" style={{ marginTop: 18 }}>
                    輕鬆開立發票
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 8, textAlign: "center" }}
                  >
                    業主付款後系統自動開立
                    <br />
                    24小時全年無休
                  </Typography>
                  <img
                    src={hightLightIconMiddle}
                    width={64}
                    style={{ marginTop: 48 }}
                  />
                  <Typography variant="h6" style={{ marginTop: 18 }}>
                    線上請款與收款
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 8, textAlign: "center" }}
                  >
                    全線上系統收請款與通知
                    <br />
                    省時省力無需對帳
                  </Typography>
                  <img
                    src={hightLightIconRight}
                    width={64}
                    style={{ marginTop: 48 }}
                  />
                  <Typography variant="h6" style={{ marginTop: 18 }}>
                    合規報稅及節稅
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 8, textAlign: "center" }}
                  >
                    系統化避免稅務風險
                    <br />
                    甚至最高省稅75%
                  </Typography>
                </Box>
              </Box>
              <img src={bottomWave_mobile} width="100%" />
            </Box>
          ) : null}
          {howItWorks ? (
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="40px 24px 50px 24px"
            >
              <img src={howItWorksIcon} width={22} />
              <Box display="flex" alignItems="center" marginTop={1}>
                <Typography variant="h5">SWAP 如何幫你把</Typography>
                <Typography variant="h5" color="primary400">
                  帳務管理變簡單
                </Typography>
              </Box>
              <Typography
                variant="body2"
                style={{
                  overflowWrap: "break-word",
                  marginTop: 8,
                  textAlign: "center",
                }}
                color="black800"
              >
                當業主透過 SWAP 付款給你，款項將以 SWAP Point 的形式儲存在 SWAP
                平台上，你能夠隨時「提領現金」並「取得勞報單」，同時業主也會取得「合法開立的發票」。
              </Typography>
              <img src={howItWorksImg} width="100%" style={{ marginTop: 18 }} />
            </Box>
          ) : null}
          {valueProp ? (
            <Box width="100%">
              <img src={valuePropBackground_mobile} width="100%" />
            </Box>
          ) : null}
          {feature ? (
            <Box width="100%" display="flex" flexDirection="column">
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                padding={3}
              >
                <img
                  src={featureImgTop}
                  width="100%"
                  style={{
                    boxShadow: theme.boxShadow.xl,
                    borderRadius: theme.borderRadius.l,
                  }}
                />
                <Typography variant="h5" style={{ marginTop: 24 }}>
                  線上開立請款單
                  <br />
                  所得申報輕鬆不失誤
                </Typography>
                <Typography
                  variant="body2"
                  color="black800"
                  style={{
                    marginTop: 8,
                    overflowWrap: "break-word",
                  }}
                >
                  SWAP
                  提供線上開立請款單的功能，讓你可以針對接案服務的性質申報正確的所得稅，再也不用擔心會面臨超繳稅金與罰稅的風險。
                </Typography>
              </Box>
              <Divider />
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                padding={3}
                style={{ backgroundColor: theme.black.black100 }}
              >
                <img
                  src={featureImgMiddle}
                  width="100%"
                  style={{
                    boxShadow: theme.boxShadow.xl,
                    borderRadius: theme.borderRadius.l,
                  }}
                />
                <Typography variant="h5" style={{ marginTop: 24 }}>
                  向業主請款毫不費力
                  <br />
                  一鍵複製付款連結就能請款
                </Typography>
                <Typography
                  variant="body2"
                  color="black800"
                  style={{ marginTop: 8 }}
                >
                  請款單開立之後，只要複製連結或透過社群分享給業主，業主就能夠透過
                  SWAP 支付款項到你的虛擬帳戶
                </Typography>
                <Button
                  size="medium"
                  style={{ marginTop: 24 }}
                  onClick={() => {}}
                >
                  前往註冊體驗
                </Button>
              </Box>
              <Divider />
              <Box
                width="100%"
                display="flex"
                flexDirection="column"
                padding={3}
              >
                <img
                  src={featureImgBottom}
                  width="100%"
                  style={{
                    boxShadow: theme.boxShadow.xl,
                    borderRadius: theme.borderRadius.l,
                  }}
                />
                <Typography variant="h5" style={{ marginTop: 24 }}>
                  隨時申請「提領」、取得勞報單
                  <br />
                  自動計算所得稅率好輕鬆
                </Typography>
                <Typography
                  variant="body2"
                  color="black800"
                  style={{ marginTop: 8 }}
                >
                  線上完成請款，收發款項變得超級輕鬆！線上完成請款，收發款項變得超級輕鬆！
                </Typography>
                <Button
                  variant="secondary"
                  size="medium"
                  style={{ marginTop: 24, marginBottom: 8 }}
                  onClick={() => {}}
                >
                  了解付費方案
                </Button>
              </Box>
              <Divider />
            </Box>
          ) : null}
          {comparison ? (
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding={3}
            >
              <Typography variant="h5">使用 SWAP 的優勢是什麼</Typography>
              <Box display="flex" alignItems="center" marginTop={1}>
                <Typography variant="body1" color="black800">
                  我們如何幫自由工作者解決
                </Typography>
                <Typography variant="body1" color="primary400">
                  &ensp;開發票&ensp;
                </Typography>
                <Typography variant="body1" color="black800">
                  的需求？
                </Typography>
              </Box>
              <Box position="relative">
                <img
                  src={comparisonImg_mobile}
                  height={1480}
                  style={{ marginTop: 24 }}
                />
                <Button
                  variant="secondary"
                  size="large"
                  width={263}
                  onClick={() => {}}
                  style={{
                    position: "absolute",
                    top: 514,
                    left: 55,
                  }}
                >
                  了解付費方案
                </Button>
              </Box>
            </Box>
          ) : null}
          {userBase ? (
            <Box width="100%" display="flex" flexDirection="column">
              <img src={userBaseTopWave_mobile} width="100%" />
              <Box
                width="100%"
                style={{ backgroundColor: theme.secondary.secondary50 }}
                padding={3}
              >
                <Box
                  width="100%"
                  borderRadius="24px"
                  boxShadow={theme.boxShadow.xl}
                  style={{ backgroundColor: theme.black.white }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  padding={3}
                >
                  <Box display="flex" alignItems="center">
                    <Typography variant="h6">超過 </Typography>
                    <Typography variant="h6" color="primary400">
                      &ensp;2,580+&ensp;
                    </Typography>
                    <Typography variant="h6">自由工作者加入 SWAP</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" marginTop={1}>
                    <Typography variant="h6">創建 </Typography>
                    <Typography variant="h6" color="secondary900">
                      &ensp;60,000+&ensp;
                    </Typography>
                    <Typography variant="h6">請款單並成功請款</Typography>
                  </Box>
                  <Typography
                    color="black800"
                    variant="body1"
                    style={{ marginTop: 8 }}
                  >
                    現在加入還能享有提款免費手續費哦！
                  </Typography>
                  <Box width="100%">
                    <Button
                      fullWidth
                      size="large"
                      variant="primary"
                      onClick={() => {}}
                      style={{ marginTop: 24 }}
                    >
                      馬上加入 SWAP
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ marginLeft: 7 }}
                      >
                        <path
                          d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                          fill="white"
                        />
                      </svg>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : null}
          {socialProof ? (
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding={3}
              style={{ backgroundColor: "#fef4e5" }}
            >
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                width="100%"
              >
                <Typography variant="h4">聽聽我們的用戶</Typography>
                <Box display="flex">
                  <Typography variant="h4">如何評價</Typography>
                  <Typography variant="h4" color="secondary900">
                    &ensp;SWAP
                  </Typography>
                </Box>
              </Box>
              <Box
                boxShadow={theme.boxShadow.xl}
                width="100%"
                style={{
                  backgroundColor: theme.black.white,
                  borderRadius: 20,
                }}
                position="relative"
                padding={3}
                marginTop={2}
              >
                <img
                  height={120}
                  src={socialProofPic1_mobile}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 0px 0px 88px"
                >
                  <Typography variant="h5">Phoebe</Typography>
                  <Typography
                    variant="subtitle"
                    color="primary400"
                    style={{ marginTop: 4 }}
                  >
                    攝影師
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  marginTop="26px"
                  width="100%"
                  height="100%"
                >
                  <img
                    src={socialProofIcon3}
                    style={{ marginRight: 7, alignSelf: "flex-start" }}
                  />
                  <Typography
                    variant="body2"
                    color="black800"
                    style={{ overflowWrap: "break-word" }}
                  >
                    之前以個人名義接影片製作的案件時，時常在合約、報價單的來回上遇到困擾。用了Swap之後，只要一個連結，就可以把匯款搞定。在執行案件的過程中，需要多少金額再從Swap提領就好，非常方便。
                  </Typography>
                  <img
                    src={socialProofIcon4}
                    style={{ marginLeft: 7, alignSelf: "flex-end" }}
                  />
                </Box>
              </Box>
              <Box
                boxShadow={theme.boxShadow.xl}
                width="100%"
                style={{
                  backgroundColor: theme.black.white,
                  borderRadius: 20,
                }}
                position="relative"
                padding={3}
                marginTop={2}
              >
                <img
                  height={120}
                  src={socialProofPic2_mobile}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 0px 0px 88px"
                >
                  <Typography variant="h5">David</Typography>
                  <Typography
                    variant="subtitle"
                    color="primary400"
                    style={{ marginTop: 4 }}
                  >
                    專案統籌
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  marginTop="26px"
                  width="100%"
                  height="100%"
                >
                  <img
                    src={socialProofIcon3}
                    style={{ marginRight: 7, alignSelf: "flex-start" }}
                  />
                  <Typography
                    variant="body2"
                    color="black800"
                    style={{ overflowWrap: "break-word" }}
                  >
                    作為發包人員，我們同時在管理很多專案。感謝SWAP讓我能夠將每個專案做到獨立建檔管理。用一個網站就能輕鬆管理各項專案。
                  </Typography>
                  <img
                    src={socialProofIcon4}
                    style={{ marginLeft: 7, alignSelf: "flex-end" }}
                  />
                </Box>
              </Box>
              <Box
                boxShadow={theme.boxShadow.xl}
                width="100%"
                style={{
                  backgroundColor: theme.black.white,
                  borderRadius: 20,
                }}
                position="relative"
                padding={3}
                marginTop={2}
              >
                <img
                  height={120}
                  src={socialProofPic3_mobile}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 0px 0px 88px"
                >
                  <Typography variant="h5">Grayson</Typography>
                  <Typography
                    variant="subtitle"
                    color="primary400"
                    style={{ marginTop: 4 }}
                  >
                    廣告投手
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  marginTop="26px"
                  width="100%"
                  height="100%"
                >
                  <img
                    src={socialProofIcon3}
                    style={{ marginRight: 7, alignSelf: "flex-start" }}
                  />
                  <Typography
                    variant="body2"
                    color="black800"
                    style={{ overflowWrap: "break-word" }}
                  >
                    在跟客戶對接的時候，差點因為無法開發票這件事而把案子給丟了。但幸好有人推薦我SWAP，幫我把這個問題解決了，讓我成功順利接到了案子。
                  </Typography>
                  <img
                    src={socialProofIcon4}
                    style={{ marginLeft: 7, alignSelf: "flex-end" }}
                  />
                </Box>
              </Box>
              <Box
                boxShadow={theme.boxShadow.xl}
                width="100%"
                style={{
                  backgroundColor: theme.black.white,
                  borderRadius: 20,
                }}
                position="relative"
                padding={3}
                marginTop={2}
              >
                <img
                  height={120}
                  src={socialProofPic4_mobile}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="10px 0px 0px 88px"
                >
                  <Typography variant="h5">Tzu-Wei</Typography>
                  <Typography
                    variant="subtitle"
                    color="primary400"
                    style={{ marginTop: 4 }}
                  >
                    品牌設計公司負責人{" "}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  marginTop="26px"
                  width="100%"
                  height="100%"
                >
                  <img
                    src={socialProofIcon3}
                    style={{ marginRight: 7, alignSelf: "flex-start" }}
                  />
                  <Typography
                    variant="body2"
                    color="black800"
                    style={{ overflowWrap: "break-word" }}
                  >
                    作為發案著我們時常需要跟各種類型的自由工作者合作，SWAP讓我能輕鬆管理專案，並能一鍵發款，輕鬆掌握案件進度。
                  </Typography>
                  <img
                    src={socialProofIcon4}
                    style={{ marginLeft: 7, alignSelf: "flex-end" }}
                  />
                </Box>
              </Box>
            </Box>
          ) : null}
          {qA ? (
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              flexDirection="column"
              padding="24px 24px 0px 24px"
            >
              <Box textAlign="left">
                <Typography variant="h5">還有其他想了解的嗎？</Typography>
                <Typography
                  variant="body1_loose"
                  style={{ marginTop: 8, overflowWrap: "break-word" }}
                >
                  我們已經幫你整理了你可能會好奇的問題，
                  <br />
                  先去常見問答區了解看看吧！
                </Typography>
              </Box>
              <Box width="100%">
                <Button
                  fullWidth
                  size="medium"
                  variant="primary"
                  style={{ marginTop: 24 }}
                  onClick={() => {}}
                >
                  查看常見問答
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: 7 }}
                  >
                    <path
                      d="M0.333313 6.16663V7.8333H10.3333L5.74998 12.4166L6.93331 13.6L13.5333 6.99996L6.93331 0.399963L5.74998 1.5833L10.3333 6.16663H0.333313Z"
                      fill="white"
                    />
                  </svg>
                </Button>
              </Box>
              <img src={qAIcon} width="100%" style={{ marginTop: 24 }} />
            </Box>
          ) : null}
          {footer ? (
            <Box
              width="100%"
              padding="40px 24px"
              display="flex"
              flexDirection="column"
            >
              <Box width="100%" display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" width={155.5}>
                  <Typography variant="caption1">關於產品</Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 16 }}
                  >
                    常見問答
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 12 }}
                  >
                    價格方案
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" width={155.5}>
                  <Typography variant="caption1">使用條款</Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 16 }}
                  >
                    網站使用條款
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 12 }}
                  >
                    隱私權政策
                  </Typography>
                </Box>
              </Box>
              <Box
                width="100%"
                display="flex"
                justifyContent="space-between"
                marginTop={5}
              >
                <Box display="flex" flexDirection="column" width={155.5}>
                  <Typography variant="caption1">使用產品</Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 16 }}
                  >
                    註冊新帳號
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 12 }}
                  >
                    登入帳號
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" width={155.5}>
                  <Typography variant="caption1">尋求協助</Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 16 }}
                  >
                    聯絡我們
                    <br />
                    swap@yosgo.com
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black800"
                    style={{ marginTop: 16 }}
                  >
                    傳送 Facebook 訊息
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" marginTop="46px">
                <SWAPLogo size="small" />
                <Typography
                  variant="caption2"
                  style={{ marginLeft: 16, opacity: 0.56 }}
                >
                  &copy; 2020 YOSGO Inc. 優市股份有限公司
                </Typography>
              </Box>
            </Box>
          ) : null}
        </LandingPageMobileWrap>
      </SWAPTheme>
    </Box>
  );
};

const LandingPageMobileWrap = styled.div``;

export default LandingPageMobile;
