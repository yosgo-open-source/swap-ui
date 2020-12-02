import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Grid,
  TextField,
  Button,
  Fade,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import Style from "styled-jsx/style";

import SWAPModal from "../SWAPModal/SWAPModal";
import SWAPSpace from "../SWAPSpace/SWAPSpace";

import {
  TaxFiledValueProps,
  SWAPTaxFieldProps,
  ExpenseCodeProps,
  IncomeCodeProps,
} from "./SWAPTaxField.types";

const SWAPTaxField: React.FC<SWAPTaxFieldProps> = ({
  onChange,
  taxDescription,
}) => {
  const typeFieldLabel = "案件類別";
  const typeFieldDefault = "請選擇";
  const caseFieldLabel = "案件內容";
  const optionFieldDefault = "請選擇";

  const [taxDescriptionValue, setTaxDescriptionValue] = useState("");
  const [type, setType] = useState(typeFieldDefault);
  const [option, setOption] = useState(optionFieldDefault);
  const [modal, setModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalErrorMsg, setModalErrorMsg] = useState("");
  const handleTypeChange = (typeCode: string) => {
    handleOptionChange(optionFieldDefault);
    setType(typeCode);
  };
  const [modalIncome, setModalIncome]: any = useState("");
  const [modalExpense, setModalExpense]: any = useState("");

  const handleOptionChange = (optionLabel) => {
    /**
     * 1. 改變選項的狀態
     * 2. 更新對應的類別代碼
     */
    setOption(optionLabel);
    let sourceOption = caseOptions.filter((i) => i[0] === optionLabel)[0];
    if (sourceOption && onChange) {
      let incomeCode = sourceOption[1];
      let expenseCode = sourceOption[2];
      let incomeLabel = SWAPTaxIncomeLabel(incomeCode);
      let expenseLabel = SWAPTaxExpenseLabel(expenseCode);
      let taxDescription = SWAPTaxDescription(incomeCode, expenseCode);
      let value: TaxFiledValueProps = {
        incomeCode,
        expenseCode,
        incomeLabel,
        expenseLabel,
        taxDescription,
      };
      onChange(value);
      setTaxDescriptionValue(taxDescription);
    }
  };

  const handleModalClear = () => {
    setModalIncome("");
    setModalExpense("");
    setModalErrorMsg("");
    setModalMsg("");
  };

  const handleModalTaxDescription = () => {
    try {
      if (modalIncome.length === 0 || !modalIncome) throw "請選擇所得類別";
      if (
        (modalIncome !== "50" && modalExpense.length === 0) ||
        (modalIncome !== "50" && !modalExpense)
      )
        throw "請選擇費用類別";
      /**清空外部欄位 */
      setOption(optionFieldDefault);
      setType(typeFieldDefault);
      /**顯示成功訊息 */
      setModalMsg("已設定");
      /**呼叫 onChnage props */
      let value = {
        incomeCode: modalIncome,
        expenseCode: modalExpense,
        incomeLabel: SWAPTaxIncomeLabel(modalIncome),
        expenseLabel: SWAPTaxExpenseLabel(modalExpense),
        taxDescription: SWAPTaxDescription(modalIncome, modalExpense),
      };
      onChange(value);
      setTaxDescriptionValue(SWAPTaxDescription(modalIncome, modalExpense));
    } catch (err) {
      setModalErrorMsg(err);
    }
  };

  useEffect(() => {
    if (taxDescription && taxDescription.length > 0) {
      setTaxDescriptionValue(taxDescription);
    }
  }, [taxDescription]);

  return (
    <div>
      <SWAPTaxFieldWrap>
        <Grid container spacing={1}>
          {/**案件類別 */}
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel htmlFor="case_type">{typeFieldLabel}</InputLabel>
              <Select
                variant="outlined"
                label={`${typeFieldLabel}`}
                value={type}
                onChange={(e) => handleTypeChange(`${e.target.value}`)}
              >
                <MenuItem disabled value={typeFieldDefault}>
                  <Typography variant="body2" color="textSecondary">
                    {typeFieldDefault}
                  </Typography>
                </MenuItem>
                {typeOptions.map((option, index) => (
                  <MenuItem key={`type_${index}`} value={`${option[1]}`}>
                    {option[0]}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/**案件內容 */}
          <Grid item xs={8} sm={8} md={8} lg={8}>
            {/* <Style jsx id="option_styled">
              {`.option_item::-webkit-scrollbar {height: 0 !important; width: 0 !important;}`}
            </Style> */}
            <FormControl variant="outlined" style={{ width: "100%" }}>
              <InputLabel htmlFor="case_type">{caseFieldLabel}</InputLabel>
              <Select
                variant="outlined"
                label={`${caseFieldLabel}`}
                value={option}
                onChange={(e) => handleOptionChange(e.target.value)}
              >
                <MenuItem disabled value={optionFieldDefault}>
                  <Typography variant="body2" color="textSecondary">
                    {optionFieldDefault}
                  </Typography>
                </MenuItem>
                {caseOptions
                  .filter((i) => i[3] === type)
                  .map((option, index) => (
                    <MenuItem
                      key={`case_${index}`}
                      value={option[0]}
                      className="option_item"
                      style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        width: "100%",
                        overflowX: "auto",
                        overflowY: "hidden",
                      }}
                    >
                      {option[0]}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
          {/**申報類別 */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <SWAPSpace />
            <TextField
              style={{ pointerEvents: "none" }}
              fullWidth
              variant="outlined"
              label="申報類別"
              value={taxDescriptionValue || ""}
              helperText={
                <span style={{ textAlign: "right", display: "block" }}>
                  <Button
                    size="small"
                    color="primary"
                    style={{ pointerEvents: "all" }}
                    onClick={() => {
                      setModal(true);
                      handleModalClear();
                    }}
                  >
                    找不到對應的案件內容嗎？點此手動設定
                  </Button>
                  <SWAPModal
                    open={modal}
                    title="手動設定申報類別"
                    primaryButton={{
                      title: "確認設定",
                      onClick: () => handleModalTaxDescription(),
                    }}
                    onClose={() => {
                      setModal(false);
                    }}
                    successMessage={modalMsg}
                    errorMessage={modalErrorMsg}
                    closeWindowOnSuccessMessage
                    children={
                      <div>
                        <Typography variant="body1">
                          由於自由工作者的案件內容多樣，若您的案件內容不在 SWAP
                          收錄的下拉選單中可在此手動設定本次案件的申報類別。
                        </Typography>
                        <SWAPSpace />
                        <SWAPSpace />
                        <SWAPSpace />
                        <Grid container spacing={1} alignContent="flex-start">
                          <Grid
                            item
                            xs={
                              modalIncome === "9A" || modalIncome === "9B"
                                ? 6
                                : 12
                            }
                            sm={
                              modalIncome === "9A" || modalIncome === "9B"
                                ? 6
                                : 12
                            }
                            md={
                              modalIncome === "9A" || modalIncome === "9B"
                                ? 6
                                : 12
                            }
                            lg={
                              modalIncome === "9A" || modalIncome === "9B"
                                ? 6
                                : 12
                            }
                          >
                            <FormControl
                              variant="outlined"
                              style={{ width: "100%" }}
                            >
                              <InputLabel htmlFor="case_type">
                                所得類別
                              </InputLabel>
                              <Select
                                variant="outlined"
                                label="請選擇所得類別"
                                value={modalIncome}
                                onChange={(e) => {
                                  setModalIncome(e.target.value);
                                  setModalExpense("");
                                  setModalErrorMsg("");
                                }}
                              >
                                {SWAPIncomeTypes.map((option, index) => (
                                  <MenuItem
                                    key={`case_${index}`}
                                    value={option.code}
                                  >
                                    {option.code} {option.label}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6}>
                            {(() => {
                              if (
                                modalIncome === "9A" ||
                                modalIncome === "9B"
                              ) {
                                let options = SWAPExpenseTypes.filter(
                                  (i) => i.source === modalIncome
                                );
                                return (
                                  <div>
                                    <Fade in>
                                      <FormControl
                                        variant="outlined"
                                        style={{ width: "100%" }}
                                      >
                                        <InputLabel htmlFor="case_type">
                                          費用類別
                                        </InputLabel>
                                        <Select
                                          variant="outlined"
                                          label="費用類別"
                                          value={modalExpense}
                                          onChange={(e) => {
                                            setModalExpense(e.target.value);
                                            setModalErrorMsg("");
                                          }}
                                        >
                                          {options.map((option, index) => (
                                            <MenuItem
                                              key={`case_${index}`}
                                              value={option.code}
                                            >
                                              [{option.code}] {option.label}
                                            </MenuItem>
                                          ))}
                                        </Select>
                                      </FormControl>
                                    </Fade>
                                  </div>
                                );
                              } else {
                                return <div />;
                              }
                            })()}
                          </Grid>
                        </Grid>
                      </div>
                    }
                  />
                </span>
              }
            />
          </Grid>
        </Grid>
      </SWAPTaxFieldWrap>
    </div>
  );
};

const SWAPTaxFieldWrap = styled.div`
  .option_item::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }
`;

export default SWAPTaxField;

const typeOptions: Array<[string, string]> = [
  ["文字", "1"],
  ["設計", "2"],
  ["行銷", "3"],
  ["程式", "4"],
  ["影像", "5"],
  ["銷售", "6"],
  ["其他", "0"],
];

const caseOptions: Array<[
  string,
  IncomeCodeProps,
  ExpenseCodeProps,
  string
]> = [
  ["文案寫手", "50", "", "1"],
  ["改稿費、審查費、審定費等修改、增刪、調整文稿之文字", "50", "", "1"],
  ["傳單、海報、Banner等設計", "50", "", "2"],
  ["3D繪圖", "50", "", "2"],
  ["Logo、商標設計", "50", "", "2"],
  ["商品包裝設計", "50", "", "2"],
  ["網頁、APP等UI/UX設計", "50", "", "2"],
  ["插畫、貼圖等設計", "50", "", "2"],
  ["廣告投放", "50", "", "3"],
  ["部落客寫推薦文、業配文", "50", "", "3"],
  ["網紅、直播主以貼文、影片、直播等方式廣告或業配", "50", "", "3"],
  ["自備攝影棚或攝影器材進行平面攝影", "9A", "90", "5"],
  ["業主提供所需工具進行平面攝影", "50", "", "5"],
  ["行銷企劃，且負擔成本費用達收入20%", "9A", "90", "3"],
  ["行銷企劃，且負擔成本費用未達收入20%", "50", "", "3"],
  [
    "房地產仲介或代銷，無底薪且業主未免費提供辦公空間、電腦等任何形式之行政資源",
    "9A",
    "76",
    "6",
  ],
  [
    "房地產仲介或代銷，有底薪或業主有免費提供辦公空間、電腦等任何形式之行政資源",
    "50",
    "",
    "6",
  ],
  ["展場規劃，且負擔成本費用達收入20%", "9A", "90", "0"],
  ["展場規劃，且負擔成本費用未達收入20%", "50", "", "0"],
  ["自備攝影棚或攝影器材進行動態攝影", "9A", "90", "5"],
  ["業主提供所需工具進行動態攝影", "50", "", "5"],
  [
    "具有知識、技藝、學術之傳授、上課等性質之教育訓練、研討會、研習會、書報討論課程、專題討論課程、講習會等",
    "50",
    "",
    "0",
  ],
  ["未具授課性質之專題演講", "9B", "98", "0"],
  [
    "演員、歌手、模特兒、節目主持人、節目主持人、舞蹈表演人、相聲表演人、特技表演人、樂器表演人、魔術表演人、其他表演人",
    "9A",
    "70",
    "0",
  ],
  [
    "非以演藝人員等表演人專長進行廣告代言，例如醫師代言、網紅代言等",
    "50",
    "",
    "0",
  ],
  ["書籍翻譯", "9B", "98", "1"],
  ["一般文件翻譯", "50", "", "1"],
  ["口譯費", "50", "", "0"],
  ["導演，且負擔成本費用達收入20%", "9A", "90", "0"],
  ["導演，且負擔成本費用未達收入20%", "50", "", "0"],
  ["室內設計，且負擔成本費用達收入20%", "9A", "90", "0"],
  ["室內設計，且負擔成本費用未達收入20%", "50", "", "0"],
  ["政府單位補助案、各類企畫書、專案報告等之潤筆費或撰寫費", "50", "", "1"],
  ["剪輯師", "50", "", "3"],
  ["CIS識別設計", "50", "", "2"],
  ["網頁、APP、系統軟體、遊戲、動畫等之程式設計、開發", "9A", "92", "4"],
  ["服裝與KOL經營規劃", "50", "", "0"],
  ["命理卜卦", "9A", "62", "0"],
  ["健身教練，無保障底薪且自備器材、空間、音樂等", "9A", "90", "0"],
  ["健身教練，有保障底薪或無自備器材、空間、音樂等", "50", "", "0"],
  [
    "非自行出版之稿費、版稅、樂譜、作曲、編劇、漫畫及演講之鐘點費",
    "9B",
    "98",
    "1",
  ],
  ["自行出版之稿費、版稅、作曲、編劇、漫畫等", "9B", "99", "1"],
  [
    "非上述類別且符合以下大部分要件：(1)未約定固定時間、地點提供勞務、(2)具備一定專業、(3)不定期支付一定金額報酬、(4)除提供勞務外另行負擔一定金額之成本費用、(5)與業主合約不具僱傭關係",
    "9A",
    "90",
    "0",
  ],
  [
    "非上述類別且符合以下大部分要件：(1)有約定固定時間、地點提供勞務、(2)未具備一定專業、(3)定期支付一定金額報酬、(4)除提供勞務外負擔成本費用不多或沒有、(5)與業主合約具僱傭關係",
    "50",
    "",
    "0",
  ],
];

const SWAPIncomeTypes: Array<{
  code: IncomeCodeProps;
  label: string;
}> = [
  {
    code: "9A",
    label: "執行業務所得",
  },
  {
    code: "9B",
    label: "稿費",
  },
  {
    code: "50",
    label: "薪資所得",
  },
];
const SWAPExpenseTypes: Array<{
  code: ExpenseCodeProps;
  source: IncomeCodeProps;
  label: string;
  expenseRatio: string;
}> = [
  { label: "律師", expenseRatio: "30% ~ 50%", code: "10", source: "9A" },
  { label: "會計師", expenseRatio: "30%", code: "11", source: "9A" },
  { label: "精算師", expenseRatio: "20%", code: "12", source: "9A" },
  { label: "地政士", expenseRatio: "30%", code: "13", source: "9A" },
  { label: "記帳士", expenseRatio: "30%", code: "14", source: "9A" },
  { label: "仲裁人", expenseRatio: "15%", code: "15", source: "9A" },
  { label: "民間公證人", expenseRatio: "30%", code: "16", source: "9A" },
  { label: "不動產估價師", expenseRatio: "35%", code: "17", source: "9A" },
  {
    label: "受委託代辦國有非公用不動產之承租、續租、過戶及繼承等申請者",
    expenseRatio: "30%",
    code: "18",
    source: "9A",
  },
  {
    label: "記帳及報稅代理業人",
    expenseRatio: "30%",
    code: "19",
    source: "9A",
  },
  { label: "技師", expenseRatio: "35%", code: "20", source: "9A" },
  { label: "建築師", expenseRatio: "35%", code: "21", source: "9A" },
  { label: "公共安檢人員", expenseRatio: "35%", code: "22", source: "9A" },
  {
    label: "未具會計師資格，辦理工商登記等業務者",
    expenseRatio: "30%",
    code: "23",
    source: "9A",
  },
  { label: "工匠（工資收入）", expenseRatio: "20%", code: "24", source: "9A" },
  { label: "工匠（工料收入）", expenseRatio: "62%", code: "25", source: "9A" },
  { label: "引水人", expenseRatio: "25%", code: "26", source: "9A" },
  { label: "內科醫師", expenseRatio: "40%", code: "30", source: "9A" },
  { label: "外科醫師", expenseRatio: "45%", code: "31", source: "9A" },
  { label: "小兒科醫師", expenseRatio: "40%", code: "32", source: "9A" },
  { label: "婦產科醫師", expenseRatio: "45%", code: "33", source: "9A" },
  { label: "眼科醫師", expenseRatio: "40%", code: "34", source: "9A" },
  { label: "耳鼻喉科醫師", expenseRatio: "40%", code: "35", source: "9A" },
  { label: "牙科醫師", expenseRatio: "40%", code: "36", source: "9A" },
  { label: "精神科醫師", expenseRatio: "46%", code: "37", source: "9A" },
  { label: "骨科醫師", expenseRatio: "45%", code: "38", source: "9A" },
  { label: "其他科別醫師", expenseRatio: "43%", code: "39", source: "9A" },
  {
    label: "助產師（士）",
    expenseRatio: "31% ~ 72%",
    code: "40",
    source: "9A",
  },
  { label: "藥師", expenseRatio: "20% ~ 100%", code: "41", source: "9A" },
  {
    label: "醫事檢驗師（生）",
    expenseRatio: "43% ~ 78%",
    code: "42",
    source: "9A",
  },
  { label: "整合照護", expenseRatio: "0%", code: "43", source: "9A" },
  { label: "駐診拆帳西醫", expenseRatio: "0%", code: "44", source: "9A" },
  { label: "營養師", expenseRatio: "20%", code: "45", source: "9A" },
  {
    label: "醫療機構醫師經核准前往他醫療機構從事醫療業務且不具僱傭關係者",
    expenseRatio: "10%",
    code: "46",
    source: "9A",
  },
  { label: "獸醫師", expenseRatio: "32% ~ 40%", code: "47", source: "9A" },
  { label: "皮膚科醫師", expenseRatio: "40%", code: "48", source: "9A" },
  { label: "家庭醫學科醫師", expenseRatio: "40%", code: "49", source: "9A" },
  { label: "中醫師", expenseRatio: "20% ~ 78%", code: "50", source: "9A" },
  { label: "語言治療師", expenseRatio: "20% ~ 78%", code: "51", source: "9A" },
  { label: "人壽保險醫療檢查", expenseRatio: "35%", code: "52", source: "9A" },
  { label: "物理治療師", expenseRatio: "43% ~ 78%", code: "53", source: "9A" },
  { label: "職能治療師", expenseRatio: "43% ~ 78%", code: "54", source: "9A" },
  { label: "心理師", expenseRatio: "20%", code: "55", source: "9A" },
  { label: "牙體技術師", expenseRatio: "40%", code: "56", source: "9A" },
  {
    label:
      "西醫師（配合政府政策辦理老人、兒童、婦女、中低收入者、身心障礙者及其他特定對象補助計畫之業務收入）",
    expenseRatio: "78%",
    code: "57",
    source: "9A",
  },
  {
    label: "西醫師（自費疫苗注射收入）",
    expenseRatio: "78%",
    code: "58",
    source: "9A",
  },
  {
    label: "西醫師（C型肝炎全口服新藥健保給付收入）",
    expenseRatio: "96%",
    code: "59",
    source: "9A",
  },
  { label: "書畫家、版畫家", expenseRatio: "30%", code: "61", source: "9A" },
  { label: "命理卜卦", expenseRatio: "20%", code: "62", source: "9A" },
  {
    label:
      "表演人（演員、歌手、模特兒、節目主持人、舞蹈表演人、相聲表演人、特技表演人、樂器表演人、魔術表演人、其他表演人）",
    expenseRatio: "45%",
    code: "70",
    source: "9A",
  },
  { label: "保險經紀人", expenseRatio: "26%", code: "71", source: "9A" },
  { label: "節目製作人", expenseRatio: "45%", code: "72", source: "9A" },
  {
    label: "公益彩券立即型彩券經銷商",
    expenseRatio: "60%",
    code: "73",
    source: "9A",
  },
  { label: "一般經紀人", expenseRatio: "20%", code: "76", source: "9A" },
  { label: "其他", expenseRatio: "0%", code: "90", source: "9A" },
  { label: "商標代理人", expenseRatio: "30%", code: "91", source: "9A" },
  { label: "程式設計師", expenseRatio: "20%", code: "92", source: "9A" },
  { label: "專利代理人", expenseRatio: "30%", code: "93", source: "9A" },
  {
    label: "未具律師資格，辦理訴訟代理人業務",
    expenseRatio: "23%",
    code: "94",
    source: "9A",
  },
  {
    label: "未具建築師資格，辦理建築規劃設計及監造等業務者",
    expenseRatio: "35%",
    code: "95",
    source: "9A",
  },
  {
    label: "未具地政士資格，辦理土地登記等業務者",
    expenseRatio: "30%",
    code: "96",
    source: "9A",
  },
  {
    label: "受大陸地區人民委託辦理繼承、公法給付或其他事務者",
    expenseRatio: "23%",
    code: "97",
    source: "9A",
  },
  { label: "自行出版", expenseRatio: "30%", code: "99", source: "9B" },
  { label: "非自行出版", expenseRatio: "75%", code: "98", source: "9B" },
];

const SWAPTaxIncomeLabel = (incomeCode: IncomeCodeProps) => {
  if (incomeCode) {
    return (
      SWAPIncomeTypes.filter((type) => type.code === incomeCode)[0]?.label || ""
    );
  } else {
    return "";
  }
};

const SWAPTaxExpenseLabel = (expenseCode: ExpenseCodeProps) => {
  if (expenseCode) {
    return (
      SWAPExpenseTypes.filter((type) => type.code === expenseCode)[0]?.label ||
      ""
    );
  } else {
    return "";
  }
};

const SWAPTaxDescription = (
  incomeCode: IncomeCodeProps,
  expenseCode: ExpenseCodeProps
) => {
  let incomeLabel = SWAPTaxIncomeLabel(incomeCode);
  let expenseLabel = SWAPTaxExpenseLabel(expenseCode);
  let taxDescription = `${incomeCode} ${incomeLabel}${
    expenseLabel.length > 0 ? ` - [${expenseCode}] ${expenseLabel}` : ""
  }`;
  if (incomeCode && expenseCode) {
    /**執行業務 */
    return taxDescription;
  } else if (incomeCode === "50") {
    /**薪資 */
    return `${incomeCode} ${incomeLabel}`;
  } else {
    return "";
  }
};

export {
  SWAPIncomeTypes,
  SWAPExpenseTypes,
  SWAPTaxIncomeLabel,
  SWAPTaxExpenseLabel,
  SWAPTaxDescription,
};

/**
 * 邏輯設定
 * 1. 所得類別為 9A, 9B 時，費用類別為必填
 * 2. 費用類別中的選項會依據，所得類別為 9A, 9B 而有所不同
 * 3. 所得類別為50薪資時不會有費用類別
 */
