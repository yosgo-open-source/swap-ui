import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Story } from "@storybook/react/types-6-0";

import { ModalProps } from "../Modal/Modal.types";
import SWAPSpace from "../SWAPSpace/SWAPSpace";
import SWAPTheme from "../SWAPTheme/SWAPTheme";
import Modal from "./Modal";
import Button from "../Button/Button";
import Progress from "../Progress/Progress";
import TaxTextField from "../TaxTextField/TaxTextField";
import MyTypography from "../Typography/Typography";
import TextField from "../TextField/TextField";
import Banner from "../Banner/Banner";
export default {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
};

const Demo: Story<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <SWAPTheme>
      <div style={{ height: 800 }}>
        <Typography variant="subtitle1">基本 Modal</Typography>
        <Typography variant="body2" color="textSecondary">
          點擊下方Button，下方 open 屬性調整為 true，以開啟 Modal。
        </Typography>
        <br />
        <Button
          size="small"
          onClick={() => {
            setOpen(true);
          }}
        >
          Open
        </Button>
        <Modal
          bodyStyle={{ overflowY: "unset" }}
          {...args}
          open={open}
          onClose={() => setOpen(false)}
        />
      </div>
    </SWAPTheme>
  );
};

export const 認識 = Demo.bind({});
認識.args = {
  // mobile: true,
  // fullWidth: true,
  // multiline: true,
  title: "我是標題",
  helpText: "我是副標題",
  size: "small",
  label: "Label",
  children: (
    <div>
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />{" "}
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />{" "}
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />{" "}
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />{" "}
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />
      <div
        style={{ height: 20, marginBottom: 16, backgroundColor: "#ececec" }}
      />
      <div style={{ height: 20, backgroundColor: "#ececec" }} />
    </div>
  ),
  primaryButton: {
    title: "我是按鈕",
    onClick: () => alert("我是按鈕"),
    disabled: false,
  },
  secondaryButton: {
    title: "我是按鈕",
    onClick: () => alert("我是按鈕"),
    disabled: false,
  },
};

const SPIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: 10 }}
  >
    <path
      d="M20.0382 38.7942C9.68414 38.7942 1.28223 30.3923 1.28223 20.0382C1.28223 9.68414 9.68414 1.28223 20.0382 1.28223C30.3923 1.28223 38.7942 9.68414 38.7942 20.0382C38.7942 30.4114 30.4114 38.7942 20.0382 38.7942Z"
      fill="#F7B52C"
    />
    <path
      d="M20.0383 39.9424C9.07183 39.9424 0.134033 31.0046 0.134033 20.0381C0.134033 9.07159 9.07183 0.133789 20.0383 0.133789C31.0048 0.133789 39.9426 9.07159 39.9426 20.0381C39.9426 31.0237 31.024 39.9424 20.0383 39.9424ZM20.0383 2.43044C10.335 2.43044 2.43068 10.3347 2.43068 20.0381C2.43068 29.7414 10.335 37.6458 20.0383 37.6458C29.7417 37.6458 37.646 29.7414 37.646 20.0381C37.646 10.3347 29.7608 2.43044 20.0383 2.43044Z"
      fill="#F59225"
    />
    <path
      d="M27.5215 21.9327H25.2631C24.8804 21.9327 24.5741 22.2389 24.5741 22.6217V27.0236C24.5741 27.4063 24.2679 27.7126 23.8852 27.7126H22.2775C21.8947 27.7126 21.5885 27.4063 21.5885 27.0236V13.0523C21.5885 12.6695 21.8947 12.3633 22.2775 12.3633H27.5407C30.7177 12.3633 32.6124 14.5451 32.6124 17.148C32.5933 19.77 30.6985 21.9327 27.5215 21.9327ZM27.3684 15.0427H25.2631C24.8804 15.0427 24.5741 15.3489 24.5741 15.7317V18.5642C24.5741 18.947 24.8804 19.2532 25.2631 19.2532H27.3684C28.7273 19.2532 29.5885 18.4111 29.5885 17.1671C29.5885 15.9231 28.7273 15.0427 27.3684 15.0427Z"
      fill="white"
    />
    <path
      d="M13.1291 27.8466C11.0813 27.8466 9.45449 27.4638 8.0765 26.3347C7.77028 26.0859 7.75114 25.6074 8.03822 25.3203L9.0143 24.3442C9.2631 24.0954 9.64588 24.0763 9.93296 24.2868C10.8325 24.9567 11.9808 25.1863 13.1865 25.1863C14.9473 25.1863 15.9042 24.5165 15.9042 23.2916C15.9042 22.7557 15.7511 22.2964 15.4258 21.9902C15.1196 21.7031 14.7751 21.55 14.0669 21.4543L12.2105 21.1863C10.8899 20.9949 9.93296 20.5739 9.22482 19.9232C8.49755 19.1959 8.13391 18.2007 8.13391 16.8993C8.13391 14.1624 10.1626 12.2485 13.4736 12.2485C15.2727 12.2485 16.6698 12.6313 17.8373 13.5308C18.1626 13.7796 18.1818 14.2772 17.8947 14.5643L16.9569 15.483C16.7272 15.7127 16.3444 15.7318 16.0765 15.5404C15.2153 14.9471 14.2392 14.8514 13.3779 14.8514C11.7894 14.8514 11.0047 15.7318 11.0047 16.7844C11.0047 17.1672 11.1387 17.5882 11.4641 17.8753C11.7703 18.1624 12.2679 18.3921 12.8803 18.4878L14.6985 18.7557C16.0956 18.9471 16.976 19.3299 17.6267 19.9423C18.4497 20.727 18.8133 21.8371 18.8133 23.1959C18.8133 26.1624 16.3444 27.8466 13.1291 27.8466Z"
      fill="white"
    />
  </svg>
);

export const 類型 = () => {
  const [scrollOpen, setScrollOpen] = useState(false);
  const [iconOpen, setIconOpen] = useState(false);
  const [onExitOpen, setOnExitOpen] = useState(false);
  const [onExitScrollOpen, setOnExitScrollOpen] = useState(false);

  const [success, setSuccess] = useState(true);
  const [fail, setFail] = useState(false);
  const [otherIcon, setOtherIcon] = useState(false);
  const [onExit, setOnExit] = useState(false);
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">Modal 內容多於視線範圍</Typography>
        <Typography variant="body2" color="textSecondary">
          視窗的標題與操作區域將會固定在頂端與底部，內容區域可以捲動
        </Typography>
        <SWAPSpace />
        <Button size="small" onClick={() => setScrollOpen(true)}>
          Scroll
        </Button>
        <Modal
          title="內容多於視野範圍"
          helpText="內容區域限制高度且可滾動！"
          open={scrollOpen}
          onClose={() => setScrollOpen(false)}
          size="medium"
          primaryButton={{
            title: "關閉",
            onClick: () => {
              setScrollOpen(false);
            },
          }}
          bodyMaxHeight={300}
          children={
            <div style={{ textAlign: "center" }}>
              <Typography variant="body2">
                ↓ 這裡的內容很長喔，所以可以捲動 ↓
              </Typography>
              {Array.from(Array(20).keys()).map((_i, i: number) => (
                <div
                  key={i}
                  style={{
                    height: 20,
                    margin: "16px 0",
                    backgroundColor: "#ececec",
                  }}
                />
              ))}
              <Typography variant="body2">↑ 已經捲動到最底部了 ↑ </Typography>
            </div>
          }
        />
      </div>
      <SWAPSpace size="l" />
      <div>
        <Typography variant="subtitle1">
          Modal 有Icon (Success || Failed || Other Icon)
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Icon 位於標題前，表示狀態
        </Typography>
        <SWAPSpace />
        <Button size="small" onClick={() => setIconOpen(true)}>
          Icon
        </Button>
        <Modal
          title={otherIcon ? "SWAP Points" : success ? "成功訊息" : "失敗訊息"}
          open={iconOpen}
          onClose={() => setIconOpen(false)}
          size="medium"
          checked={success}
          failed={fail}
          icon={otherIcon ? SPIcon : null}
          iconColor={success ? "success800" : "danger800"}
          primaryButton={{
            title: success ? "失敗" : "成功",
            onClick: () => {
              if (success) {
                setSuccess(false);
                setFail(true);
              } else if (fail) {
                setSuccess(true);
                setFail(false);
              } else if (otherIcon) {
                setOtherIcon(false);
                setSuccess(true);
              }
            },
          }}
          secondaryButton={{
            title: "其他Icon",
            onClick: () => {
              setSuccess(false);
              setFail(false);
              setOtherIcon(true);
            },
          }}
          children={
            <>
              <Typography variant="body2" style={{ textAlign: "center" }}>
                試著點擊下方按鈕可切換Icon！
              </Typography>
              {Array.from(Array(6).keys()).map((_i, i: number) => (
                <div
                  key={i}
                  style={{
                    height: 20,
                    marginTop: "16px",
                    backgroundColor: "#ececec",
                  }}
                />
              ))}
            </>
          }
        />
      </div>
      <SWAPSpace size="l" />
      <div>
        <Typography variant="subtitle1">Modal 關閉提醒</Typography>
        <Typography variant="body2" color="textSecondary">
          重要內容的Modal，關閉時，提醒是否確定關閉！
        </Typography>
        <SWAPSpace />
        <Button size="small" onClick={() => setOnExitOpen(true)}>
          OnExit
        </Button>
        <Button size="small" onClick={() => setOnExitScrollOpen(true)}>
          OnExit (有scroll)
        </Button>
        <Modal
          title="重要Modal"
          open={onExitOpen}
          // open
          onClose={() => setOnExit(true)}
          onExit={onExit}
          size="medium"
          label={onExit ? "確定要關閉嗎?" : null}
          primaryButton={{
            title: onExit ? "確定關閉" : "確認",
            onClick: () => {
              if (onExit) {
                window.location.reload();
              } else {
                setOnExitOpen(false);
              }
            },
          }}
          secondaryButton={{
            title: onExit ? "先不關閉" : "關閉",
            onClick: () => {
              if (onExit) {
                setOnExit(false);
              } else {
                setOnExit(true);
              }
            },
          }}
          children={
            <div style={{ textAlign: "center" }}>
              {Array.from(Array(6).keys()).map((_i, i: number) => (
                <div
                  key={i}
                  style={{
                    height: 20,
                    marginBottom: "16px",
                    backgroundColor: "#ececec",
                  }}
                />
              ))}
            </div>
          }
        />
        <Modal
          bodyMaxHeight={400}
          title="重要Modal"
          open={onExitScrollOpen}
          // open
          onClose={() => setOnExit(true)}
          onExit={onExit}
          size="medium"
          label={onExit ? "確定要關閉嗎?" : null}
          primaryButton={{
            title: onExit ? "確定關閉" : "確認",
            onClick: () => {
              if (onExit) {
                window.location.reload();
              } else {
                setOnExitScrollOpen(false);
              }
            },
          }}
          secondaryButton={{
            title: onExit ? "先不關閉" : "關閉",
            onClick: () => {
              if (onExit) {
                setOnExit(false);
              } else {
                setOnExit(true);
              }
            },
          }}
          children={
            <div style={{ textAlign: "center" }}>
              {Array.from(Array(16).keys()).map((_i, i: number) => (
                <div
                  key={i}
                  style={{
                    height: 20,
                    marginBottom: "16px",
                    backgroundColor: "#ececec",
                  }}
                />
              ))}
            </div>
          }
        />
      </div>
      <SWAPSpace size="l" />
    </SWAPTheme>
  );
};

export const 動畫 = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [codeValue, setCodeValue] = React.useState("");
  const [domainValue, setDomainValue] = useState("");
  const [domainCodeValue, setDomainCodeValue] = React.useState("");
  const [caseDescription, setCaseDescription]: any = useState("");
  const [codeError, setCodeError] = React.useState(false);
  const [domainError, setDomainError] = React.useState(false);
  return (
    <SWAPTheme>
      <div>
        <Typography variant="subtitle1">Modal </Typography>
        <Typography variant="body2" color="textSecondary">
          動畫
        </Typography>
        <SWAPSpace />
        <Button size="small" onClick={() => setOpen(true)}>
          Scroll
        </Button>
        <Modal
          title="內容多於視野範圍"
          helpText="內容區域限制高度且可滾動！"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          size="medium"
          primaryButton={{
            title: "下一步",
            onClick: () => {
              setStep(step + 1);
            },
          }}
          secondaryButton={{
            title: "上一步",
            onClick: () => {
              setStep(step - 1);
            },
          }}
          height={step === 1 ? 445 : step === 2 ? 335 : 430}
        >
          <div style={{}}>
            <Progress
              count={3}
              step={step}
              label={["第一步", "第二步", "第三步"]}
            />
            <div
              style={{
                height: 1,
                width: "100%",
                margin: "16px 0",
                backgroundColor: "#cccccc",
              }}
            />
            {step === 1 ? (
              <div style={{}}>
                <MyTypography variant="title">請選擇案件類型</MyTypography>
                <SWAPSpace />
                <TaxTextField
                  codeValue={codeValue}
                  domainValue={domainValue}
                  domainCodeValue={domainCodeValue}
                  onChange={(v) => {
                    const { incomeCode, expenseCode, expenseCodeAndLabel } = v;
                    setCodeValue(incomeCode);
                    setDomainValue(expenseCodeAndLabel);
                    setDomainCodeValue(expenseCode);
                  }}
                  codeError={codeError}
                  domainError={domainError}
                  codeOnClick={() => setCodeError(false)}
                  domainOnClick={() => setDomainError(false)}
                />
                <SWAPSpace />
                <MyTypography variant="subtitle">
                  若不確定案件所得的申報類別，建議 點此查詢
                </MyTypography>
                <div
                  style={{
                    height: 1,
                    width: "100%",
                    margin: "16px 0",
                    backgroundColor: "#cccccc",
                  }}
                />
                <MyTypography variant="title">請描述你的服務內容</MyTypography>
                <SWAPSpace size={4} />
                <MyTypography variant="caption2" color="black700">
                  本欄將顯示於請款單與勞報單上，請勿寫得過於簡短，建議包含服務公司、服務時間以及服務內容
                </MyTypography>
                <SWAPSpace />
                <TextField
                  multiline
                  rows={3}
                  fullWidth
                  height={92}
                  value={caseDescription}
                  placeholder="範例: 於 2020/1/1~2020/1/31 協助 〇〇〇  公司製作 〇〇〇"
                  onChange={(e: any) => {
                    setCaseDescription(e.target.value);
                  }}
                />
              </div>
            ) : step === 2 ? (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <>
                  <SWAPSpace />
                  <MyTypography variant="title">請輸入請款金額</MyTypography>
                  <SWAPSpace size={8} />
                  <MyTypography variant="caption2" color="black800">
                    請輸入未稅金額或是含稅金額，系統將自動計算(營業稅 5%)
                  </MyTypography>
                  <SWAPSpace />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <TextField
                      height={56}
                      fullWidth
                      label="未稅金額"
                      type="text"
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                      value={1232}
                      style={{ marginRight: 8 }}
                    />
                    <TextField
                      height={56}
                      fullWidth
                      label="含稅金額(業主付款金額)"
                      type="text"
                      inputProps={{
                        inputMode: "numeric",
                        pattern: "[0-9]*",
                      }}
                      value={2367234}
                    />
                  </div>
                  <SWAPSpace />
                  <Banner
                    children={
                      <div>
                        含稅金額 = (未稅金額 + (未稅金額 x 0.0211)) x 1.05
                        <br /> 因所得申報類別為 50 薪資，依據規定業主須負擔
                        2.11% 的<b>二代健保補充保費</b>。
                      </div>
                    }
                  />
                </>
              </div>
            ) : (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <>
                  <SWAPSpace />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <MyTypography variant="body1">
                      業主付款金額(TWD)
                    </MyTypography>
                    <MyTypography variant="h6" style={{ fontWeight: 400 }}>
                      123123{" "}
                    </MyTypography>
                  </div>
                  <SWAPSpace />
                  <MyTypography variant="subtitle">我的請款單明細</MyTypography>
                  <SWAPSpace size="s" />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <MyTypography variant="body1">未稅金額(TWD)</MyTypography>
                    <MyTypography variant="h6" style={{ fontWeight: 400 }}>
                      2342345{" "}
                    </MyTypography>
                  </div>
                  <SWAPSpace size={8} />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MyTypography variant="body1" style={{ marginRight: 4 }}>
                        扣除手續費(TWD)
                      </MyTypography>
                    </div>
                    <MyTypography
                      variant="h6"
                      color="danger800"
                      style={{ fontWeight: 400 }}
                    >
                      90809890{" "}
                    </MyTypography>
                  </div>
                  <SWAPSpace size={8} />
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <MyTypography variant="body1">優惠券折抵(TWD)</MyTypography>
                    <MyTypography variant="subtitle" color="primary400">
                      使用優惠券
                    </MyTypography>
                  </div>
                  {/* Line */}
                  <div
                    style={{
                      width: "100%",
                      height: 1,
                      backgroundColor: "#cccccc",
                      margin: "12px 0px",
                    }}
                  />
                  {/* SP */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <MyTypography variant="body1">實收點數(SP)</MyTypography>
                    <MyTypography variant="h6">8907789 </MyTypography>
                  </div>
                  <SWAPSpace />
                  <Banner
                    children={
                      <div>
                        當業主完成付款後，系統將自動扣除手續費，您的帳戶將增加
                        <b> 3453245 SWAP Points</b>，每 1 SWAP Points 等同 1 TWD
                        案件款項。
                      </div>
                    }
                  />
                </>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </SWAPTheme>
  );
};
