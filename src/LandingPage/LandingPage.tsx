import React from "react";
import styled from "styled-components";

import { Box, Divider, useTheme } from "@material-ui/core";

import { LandingPageProps } from "./LandingPage.types";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";

import Typed from "react-typed";

import heroImg from "./img/Frame 367@2x.png";
import logo_1 from "./img/appworks.png";
import logo_2 from "./img/SLP.png";
import logo_3 from "./img/aws activate.png";
import logo_4 from "./img/shopify.png";
import logo_5 from "./img/AWS.png";
import logo_6 from "./img/startup stadium.png";
import logo_7 from "./img/LCS.png";

import topWave from "./img/Top wave.svg";
import bottomWave from "./img/Bottom Wave.svg";
import painPointicon from "./img/Frame 399.svg";
import dotleft from "./img/Dotleft.svg";
import dotright from "./img/Dotright.svg";

import swap from "./img/swap.svg";
import hightLightIconLeft from "./img/Frame 392left.svg";
import hightLightIconMiddle from "./img/Frame 392middle.svg";
import hightLightIconRight from "./img/Frame 392right.svg";
import howItWorksIcon from "./img/Lightbulb Filled.svg";
import howItWorksBottomWave from "./img/Vector 3.svg";
import howItWorksImg from "./img/how SWAP works - graphic.svg";
import valuePropBackground from "./img/Value Prop.png";
import comparisonImgTop from "./img/Highlight_01.png";
import comparisonImgMiddle from "./img/Highlight_02.png";
import comparisonImgBottom from "./img/Highlight_03.png";
import comparisonFlowTop from "./img/right-bottomtop.png";
import comparisonFlowBottom from "./img/right-bottombottom.png";
import qAIcon from "./img/Frame 417.png";
import userBaseIcon from "./img/Frame 376.png";
import userBaseTopWave from "./img/Vector4.png";
import socialProofIcon1 from "./img/path.png";
import socialProofIcon2 from "./img/path(1).png";
import socialProofIcon3 from "./img/Frame 379.png";
import socialProofIcon4 from "./img/Frame 380.png";
import socialProofPic1 from "./img/Avatar1.png";
import socialProofPic2 from "./img/Avatar2.png";
import socialProofPic3 from "./img/Avatar3.png";
import comparisonImg from "./img/Frame 451.png";
import comparisonDot from "./img/Dot.png";
import SWAPLogo from "../SWAPLogo/SWAPLogo";

const LandingPage: React.FC<LandingPageProps> = ({
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
        <LandingPageWrap>
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
              >
                <Box display="flex" paddingTop={15}>
                  <Typography variant="d4">自由工作者的</Typography>
                  <Typography variant="d4" color="primary400">
                    財務管理平台
                  </Typography>
                </Box>
                <Typography
                  style={{
                    fontSize: 28,
                    fontWeight: 400,
                    lineHeight: 1.25,
                    marginTop: 12.5,
                  }}
                >
                  <Typed
                    strings={["收款、報稅、開發票，通通一站搞定"]}
                    loop
                    typeSpeed={120}
                  />
                </Typography>
                <Box display="flex" marginTop="40.5px">
                  <Button
                    size="large"
                    variant="primary"
                    style={{ marginRight: 16 }}
                    onClick={() => {}}
                  >
                    前往帳戶總覽
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
                  <Button size="large" variant="secondary" onClick={() => {}}>
                    我有帳號，我要登入
                  </Button>
                </Box>
                <Box maxWidth={1300} marginRight={12} marginTop="51px">
                  <img src={heroImg} width="100%" />
                </Box>
              </Box>
            </Box>
          ) : null}
          {/* Logos */}
          {logos ? (
            <>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                width="100%"
                padding="24px 152px"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  maxWidth={1136}
                >
                  <img src={logo_1} />
                  <img src={logo_2} />
                  <img src={logo_3} />
                  <img src={logo_4} />
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  padding="7px 158.5px 24px 158.5px"
                  maxWidth={1136}
                >
                  <img src={logo_5} />
                  <img src={logo_6} />
                  <img src={logo_7} />
                </Box>
              </Box>
              <Divider />
            </>
          ) : null}
          {painPoints ? (
            <Box
              height={627}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Typography variant="h3">
                  身為自由工作者，你有以下這樣的困擾嗎？
                </Typography>
              </Box>
              <Box
                display="flex"
                height={328}
                width={1140}
                marginTop={3}
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <img src={painPointicon} />
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
                </Box>
                <Box
                  width={2}
                  height={160}
                  style={{ backgroundColor: theme.black.black400 }}
                />
                <Box>
                  <img src={painPointicon} />
                  <Typography
                    style={{
                      fontSize: 20,
                      lineHeight: 1.6,
                      marginTop: 24,
                      textAlign: "center",
                    }}
                  >
                    接案收入不穩定
                    <br />
                    開公司成本又太高
                  </Typography>
                </Box>
                <Box
                  width={2}
                  height={160}
                  style={{ backgroundColor: theme.black.black400 }}
                />
                <Box>
                  <img src={painPointicon} />
                  <Typography
                    style={{
                      fontSize: 20,
                      lineHeight: 1.6,
                      marginTop: 24,
                      textAlign: "center",
                    }}
                  >
                    業主報稅報錯
                    <br />
                    導致你多繳稅或罰款
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : null}
          {hightLight ? (
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <img src={topWave} width="100%" />
              <Box
                height={582}
                width="100%"
                style={{
                  backgroundColor: theme.primary.primary100,
                }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box position="relative">
                  <img
                    src={dotleft}
                    style={{
                      position: "absolute",
                      top: -201,
                      left: -59,
                      zIndex: 1,
                    }}
                  />
                  <img
                    src={dotright}
                    style={{
                      position: "absolute",
                      top: 65,
                      left: 991.5,
                      zIndex: 1,
                    }}
                  />
                </Box>
                <Box
                  width={1139}
                  height={520}
                  boxShadow={theme.boxShadow.xl}
                  borderRadius={theme.borderRadius.l}
                  style={{ backgroundColor: theme.black.white, zIndex: 2 }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  paddingTop="80px"
                >
                  <Box
                    width={832}
                    height={40}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      width={160}
                      height={2}
                      style={{
                        backgroundColor: theme.black.black500,
                        marginRight: 24,
                      }}
                    />
                    <Typography variant="h2">沒問題，讓 </Typography>
                    <img src={swap} style={{ margin: "0px 16px" }} />
                    <Typography variant="h2"> 來幫助你！</Typography>
                    <Box
                      width={160}
                      height={2}
                      style={{
                        backgroundColor: theme.black.black500,
                        marginLeft: 24,
                      }}
                    />
                  </Box>
                  <Box marginTop={3}>
                    <Typography variant="h4" style={{ fontWeight: 400 }}>
                      透過 SWAP 平台，你可以⋯
                    </Typography>
                  </Box>
                  <Box
                    width={946}
                    height={216}
                    marginTop={5}
                    display="flex"
                    justifyContent="space-between"
                  >
                    <Box
                      width={272}
                      height={216}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <img src={hightLightIconLeft} />
                      <Typography variant="h4" style={{ marginTop: 24 }}>
                        輕鬆開立發票
                      </Typography>
                      <Typography
                        variant="body2_loose"
                        style={{ marginTop: 8 }}
                      >
                        這是一段描述文字這是一段描述
                      </Typography>
                    </Box>
                    <Box
                      width={272}
                      height={216}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <img src={hightLightIconMiddle} />
                      <Typography variant="h4" style={{ marginTop: 24 }}>
                        線上請款與收款
                      </Typography>
                      <Typography
                        variant="body2_loose"
                        style={{ marginTop: 8 }}
                      >
                        這是一段描述文字這是一段描述
                      </Typography>
                    </Box>
                    <Box
                      width={272}
                      height={216}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <img src={hightLightIconRight} />
                      <Typography variant="h4" style={{ marginTop: 24 }}>
                        合規報稅及節稅
                      </Typography>
                      <Typography
                        variant="body2_loose"
                        style={{ marginTop: 8 }}
                      >
                        這是一段描述文字這是一段描述
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <img src={bottomWave} width="100%" />
            </Box>
          ) : null}
          {howItWorks ? (
            <Container>
              <Box
                height={1142}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Box width={536} height={52} marginTop={18}>
                  <Box display="flex" alignItems="center">
                    <img src={howItWorksIcon} style={{ marginRight: 12 }} />
                    <Typography variant="h2">SWAP 如何幫你把</Typography>
                    <Typography variant="h2" color="primary400">
                      帳務管理變簡單
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <img src={howItWorksBottomWave} />
                  </Box>
                </Box>
                <Box
                  width={753}
                  height={58}
                  marginTop={2}
                  display="flex"
                  alignItems="center"
                  textAlign="center"
                >
                  <Typography
                    variant="h6"
                    style={{ fontWeight: 400, lineHeight: 1.6 }}
                    color="black800"
                  >
                    當業主透過 SWAP 付款給你，款項將以 SWAP Point 的形式儲存在
                    SWAP 平台上，你能夠隨
                    <br />
                    時「提領現金」並「取得勞報單」，同時業主也會取得「合法開立的發票」。
                  </Typography>
                </Box>
                <Box marginTop={9}>
                  <img src={howItWorksImg} />
                </Box>
              </Box>
            </Container>
          ) : null}
          {valueProp ? (
            <Container>
              <Box display="flex" justifyContent="center">
                <img src={valuePropBackground} width="100%" />
              </Box>
            </Container>
          ) : null}
          {feature ? (
            <Box width="100%">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={661}
              >
                <Box width={720} position="relative">
                  <img src={comparisonImgTop} height={501} width={720} />
                  <img
                    src={comparisonFlowTop}
                    style={{
                      position: "absolute",
                      top: 440,
                      left: 324,
                      zIndex: 1,
                    }}
                  />
                </Box>
                <Box marginLeft={3} marginRight={5}>
                  <Typography variant="h3" style={{ lineHeight: 1.6 }}>
                    線上開立請款單
                    <br />
                    所得申報輕鬆不失誤
                  </Typography>
                  <Typography variant="body1_loose" style={{ marginTop: 16 }}>
                    SWAP 提供線上開立請款單的功能，讓你可以針對接案服
                    <br />
                    務的性質申報正確的所得稅，再也不用擔心會面臨超繳稅
                    <br />
                    金與罰稅的風險。
                  </Typography>
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={548}
                style={{ backgroundColor: theme.black.black100 }}
              >
                <Box marginLeft={10}>
                  <Typography variant="h3" style={{ lineHeight: 1.6 }}>
                    向業主請款毫不費力
                    <br />
                    一鍵複製付款連結就能請款
                  </Typography>
                  <Typography variant="body1_loose" style={{ marginTop: 16 }}>
                    請款單開立之後，只要複製連結或透過社群分享給業主，業主將
                    <br />
                    能付款至SWAP平台，並讓您完成收款程序。
                  </Typography>
                  <Button
                    size="large"
                    style={{ marginTop: 24 }}
                    onClick={() => {}}
                  >
                    前往註冊體驗
                  </Button>
                </Box>
                <Box marginLeft={3} position="relative">
                  <img src={comparisonImgMiddle} height={388} width={720} />
                  <img
                    src={comparisonFlowBottom}
                    style={{ position: "absolute", top: 328, right: 333.5 }}
                  />
                </Box>
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={536}
              >
                <Box>
                  <img src={comparisonImgBottom} height={364} width={528} />
                </Box>
                <Box marginLeft={3} marginRight={5}>
                  <Typography variant="h3" style={{ lineHeight: 1.6 }}>
                    隨時申請「提領」、取得勞報單
                    <br />
                    自動計算所得稅率好輕鬆
                  </Typography>
                  <Typography variant="body1_loose" style={{ marginTop: 16 }}>
                    可依您規劃決定何時申請「提領」及提領金額，系統將自動計算
                    <br />
                    所得稅率並開立全電子化之勞務報酬單。輕鬆自由又效率！
                  </Typography>
                  <Button
                    variant="secondary"
                    size="large"
                    style={{ marginTop: 24 }}
                    onClick={() => {}}
                  >
                    了解付費方案
                  </Button>
                </Box>
              </Box>
            </Box>
          ) : null}
          {comparison ? (
            <Container>
              <Box
                width="100%"
                height={1074}
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding="120px 0px 60px 0px"
              >
                <Typography variant="h2">使用 SWAP 的優勢是什麼</Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  position="relative"
                  marginTop={2}
                >
                  <Typography
                    variant="h3"
                    color="black800"
                    style={{ fontWeight: 400 }}
                  >
                    我們如何幫自由工作者解決
                  </Typography>
                  <Typography variant="h3" color="primary400">
                    &ensp;開發票&ensp;
                  </Typography>
                  <Typography
                    variant="h3"
                    color="black800"
                    style={{ fontWeight: 400 }}
                  >
                    的需求？
                  </Typography>
                  <svg
                    width="86"
                    height="10"
                    viewBox="0 0 86 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      position: "absolute",
                      top: 35,
                      left: 347,
                    }}
                  >
                    <path
                      d="M2 2C3.23024 3.20024 4.72547 4.659 6.10051 6.0005C8.38107 8.22544 12.0194 8.22493 14.3 6V6C16.5806 3.77506 20.2194 3.77507 22.5 6V6C24.7806 8.22494 28.4194 8.22494 30.7 6V6C32.9806 3.77506 36.6194 3.77507 38.9 6V6C41.1806 8.22494 44.8194 8.22493 47.1 6V6C49.3806 3.77507 53.0194 3.77507 55.3 6V6C57.5806 8.22493 61.2194 8.22493 63.5 6V6C65.7806 3.77507 69.4194 3.77507 71.7 6V6C73.9806 8.22493 77.6194 8.22494 79.9 6L84 2"
                      stroke="#F6A128"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                  </svg>
                </Box>
                <Box width={851} marginTop={8} position="relative">
                  <img
                    src={comparisonImg}
                    width={851}
                    height={735}
                    style={{ zIndex: 2, position: "absolute" }}
                  />
                  <img
                    src={comparisonDot}
                    style={{
                      position: "absolute",
                      top: 203,
                      left: -138,
                      zIndex: 1,
                    }}
                  />
                  <img
                    src={comparisonDot}
                    style={{
                      position: "absolute",
                      top: 203,
                      right: -113,
                      zIndex: 1,
                    }}
                  />
                  <Button
                    variant="secondary"
                    size="large"
                    width={256}
                    onClick={() => {}}
                    style={{
                      position: "absolute",
                      top: 631,
                      left: 297.5,
                      zIndex: 3,
                    }}
                  >
                    了解付費方案
                  </Button>
                </Box>
              </Box>
            </Container>
          ) : null}
          {userBase ? (
            <Box width="100%" display="flex" flexDirection="column">
              <img src={userBaseTopWave} />
              <Box
                width="100%"
                height={474}
                style={{ backgroundColor: "#fef4e5" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  width={1140}
                  height={324}
                  borderRadius="24px"
                  boxShadow={theme.boxShadow.xl}
                  style={{ backgroundColor: theme.black.white }}
                  display="flex"
                  justifyContent="space-between"
                  padding="60px 65px 0px 65px"
                >
                  <Box display="flex" flexDirection="column">
                    <Box display="flex" alignItems="center">
                      <Typography variant="h3">超過 </Typography>
                      <Typography variant="h3" color="primary800">
                        &ensp;2,580+&ensp;
                      </Typography>
                      <Typography variant="h3">自由工作者加入 SWAP</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" marginTop={2}>
                      <Box display="flex" alignItems="center">
                        <Typography variant="h2">創建 </Typography>
                        <Typography variant="h2" color="secondary800">
                          &ensp;60,000+&ensp;
                        </Typography>
                        <Typography variant="h2">請款單並成功請款</Typography>
                      </Box>
                    </Box>
                    <Typography
                      color="black800"
                      style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16 }}
                    >
                      現在加入還能享有提款免費手續費哦！
                    </Typography>
                    <Button
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
                  <img src={userBaseIcon} />
                </Box>
              </Box>
            </Box>
          ) : null}
          {socialProof ? (
            <Box
              width="100%"
              height={687}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box
                position="relative"
                width="100%"
                height={687}
                style={{ backgroundColor: "#fef4e5" }}
              >
                <Box padding="80px 0px 0px 150px">
                  <Typography variant="d4">聽聽我們的用戶</Typography>
                  <Box display="flex">
                    <Typography variant="d4">如何評價</Typography>
                    <Typography variant="d4" color="secondary800">
                      &ensp;SWAP
                    </Typography>
                  </Box>
                </Box>
                <img
                  src={socialProofIcon1}
                  style={{ position: "absolute", top: 157, left: 515 }}
                />
                <img
                  src={socialProofIcon2}
                  style={{ position: "absolute", top: 150, left: 529 }}
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop={8}
                >
                  <Box
                    boxShadow={theme.boxShadow.xl}
                    width={590}
                    height={280}
                    style={{
                      backgroundColor: theme.black.white,
                      borderTopRightRadius: 24,
                      borderBottomRightRadius: 24,
                    }}
                    position="relative"
                  >
                    <img
                      src={socialProofPic1}
                      style={{ position: "absolute", top: 22, left: 0 }}
                    />
                    <Box
                      display="flex"
                      flexDirection="column"
                      padding="40px 0px 0px 155px"
                    >
                      <Typography variant="h4">Phoebe</Typography>
                      <Typography
                        variant="title"
                        color="primary800"
                        style={{ marginTop: 8 }}
                      >
                        攝影師
                      </Typography>
                      <Box display="flex" marginTop="10px">
                        <img
                          src={socialProofIcon3}
                          style={{ marginRight: 7 }}
                        />
                        <Typography
                          variant="body1"
                          color="black800"
                          style={{ width: 349, flexWrap: "wrap" }}
                        >
                          之前以個人名義接影片製作的案件時，時常在合約、報價單的來回上遇到困擾。用了Swap之後，只要一個連結，就可以把匯款搞定。在執行案件的過程中，需要多少金額再從Swap提領就好，非常方便。
                        </Typography>
                        <img src={socialProofIcon4} style={{ marginLeft: 7 }} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    boxShadow={theme.boxShadow.xl}
                    width={708}
                    height={280}
                    style={{
                      backgroundColor: theme.black.white,
                      borderRadius: 24,
                    }}
                    position="relative"
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      padding="40px 0px 0px 273px"
                    >
                      <Typography variant="h4">Grayson</Typography>
                      <Typography
                        variant="title"
                        color="primary800"
                        style={{ marginTop: 8 }}
                      >
                        廣告投手
                      </Typography>
                      <Box display="flex" marginTop="10px">
                        <img
                          src={socialProofIcon3}
                          style={{ marginRight: 7 }}
                        />
                        <Typography
                          variant="body1"
                          color="black800"
                          style={{ width: 349, flexWrap: "wrap" }}
                        >
                          在跟客戶對接的時候，差點因為無法開發票這件事而把案子給丟了。但幸好有人推薦我SWAP，幫我把這個問題解決了，讓我成功順利接到了案子。
                        </Typography>
                        <img src={socialProofIcon4} style={{ marginLeft: 7 }} />
                      </Box>
                    </Box>
                    <img
                      src={socialProofPic2}
                      style={{ position: "absolute", top: 22, left: 16 }}
                    />
                  </Box>
                  <Box
                    boxShadow={theme.boxShadow.xl}
                    width={94}
                    height={280}
                    style={{
                      backgroundColor: theme.black.white,
                      borderTopLeftRadius: 24,
                      borderBottomLeftRadius: 24,
                    }}
                    position="relative"
                  >
                    <img
                      src={socialProofPic3}
                      style={{ position: "absolute", top: 22, left: 16 }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : null}
          {qA ? (
            <Container>
              <Box
                height={368}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <img src={qAIcon} />
                </Box>
                <Box marginLeft={8}>
                  <Typography variant="h2">還有其他想了解的嗎？</Typography>
                  <Typography
                    variant="h4"
                    style={{ fontWeight: 400, marginTop: 16 }}
                  >
                    我們已經幫你整理了你可能會好奇的問題，
                    <br />
                    先去常見問答區了解看看吧！
                  </Typography>
                  <Button
                    size="large"
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
              </Box>
            </Container>
          ) : null}
          {footer ? (
            <Container>
              <Box
                width={960}
                height={252}
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Box display="flex">
                  <Typography variant="caption1" style={{ marginRight: 196 }}>
                    關於產品
                  </Typography>
                  <Typography variant="caption1" style={{ marginRight: 196 }}>
                    使用條款
                  </Typography>
                  <Typography variant="caption1" style={{ marginRight: 196 }}>
                    使用產品
                  </Typography>
                  <Typography variant="caption1">使用產品</Typography>
                </Box>
                <Box display="flex" marginTop={2}>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 188 }}
                  >
                    常見問答
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 160 }}
                  >
                    網站使用條款
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 174 }}
                  >
                    註冊新帳號
                  </Typography>
                  <Typography variant="body2_loose" color="black700">
                    聯絡我們
                    <a
                      href="mailto:swap@yosgo.com"
                      target="_blank"
                      style={{
                        color: theme.black.black700,
                        textDecoration: "none",
                      }}
                    >
                      swap@yosgo.com
                    </a>
                  </Typography>
                </Box>
                <Box display="flex" marginTop={2}>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 188 }}
                  >
                    價格方案
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 174 }}
                  >
                    隱私權政策
                  </Typography>
                  <Typography
                    variant="body2_loose"
                    color="black700"
                    style={{ marginRight: 188 }}
                  >
                    登入帳號
                  </Typography>
                  <Typography variant="body2_loose" color="black700">
                    傳送 Facebook 訊息
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" marginTop="58px">
                  <SWAPLogo size="small" />
                  <Typography variant="caption2" style={{ marginLeft: 16 }}>
                    &copy; 2020 YOSGO Inc. 優市股份有限公司
                  </Typography>
                </Box>
              </Box>
            </Container>
          ) : null}
        </LandingPageWrap>
      </SWAPTheme>
    </Box>
  );
};

const LandingPageWrap = styled.div``;

export default LandingPage;
