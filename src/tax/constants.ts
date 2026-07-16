// 自 legacy/v1-src/SWAPTaxField/SWAPTaxField.tsx 447–656 行原樣抽出（v1 保留匯出）
import type { IncomeCodeProps, ExpenseCodeProps } from "../components/TaxTextField.types";

export const SWAPIncomeTypes: Array<{
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
export const SWAPExpenseTypes: Array<{
  code: ExpenseCodeProps;
  source: IncomeCodeProps;
  label: string;
  expenseRatio: string;
}> = [
  { label: "律師", expenseRatio: "30%", code: "10", source: "9A" },
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
  {
    label: "律師配合政府政策辦理法律扶助案件之收入",
    expenseRatio: "50%",
    code: "27",
    source: "9A",
  },
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
    expenseRatio: "31%",
    code: "40",
    source: "9A",
  },
  { label: "藥師", expenseRatio: "20%", code: "41", source: "9A" },
  {
    label: "醫事檢驗師（生）",
    expenseRatio: "43%",
    code: "42",
    source: "9A",
  },
  { label: "營養師", expenseRatio: "20%", code: "45", source: "9A" },
  {
    label: "醫療機構醫師經核准前往他醫療機構從事醫療業務且不具僱傭關係者",
    expenseRatio: "10%",
    code: "46",
    source: "9A",
  },
  { label: "獸醫師", expenseRatio: "32%", code: "47", source: "9A" },
  { label: "皮膚科醫師", expenseRatio: "40%", code: "48", source: "9A" },
  { label: "家庭醫學科醫師", expenseRatio: "40%", code: "49", source: "9A" },
  { label: "中醫師", expenseRatio: "20%", code: "50", source: "9A" },
  { label: "語言治療師", expenseRatio: "20%", code: "51", source: "9A" },
  { label: "人壽保險醫療檢查", expenseRatio: "35%", code: "52", source: "9A" },
  { label: "物理治療師", expenseRatio: "43%", code: "53", source: "9A" },
  { label: "職能治療師", expenseRatio: "43%", code: "54", source: "9A" },
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
  { label: "專利師及專利代理", expenseRatio: "30%", code: "93", source: "9A" },
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

export const SWAPTaxIncomeLabel = (incomeCode: IncomeCodeProps) => {
  if (incomeCode) {
    return (
      SWAPIncomeTypes.filter((type) => type.code === incomeCode)[0]?.label || ""
    );
  } else {
    return "";
  }
};

export const SWAPTaxExpenseLabel = (expenseCode: ExpenseCodeProps) => {
  if (expenseCode) {
    return (
      SWAPExpenseTypes.filter((type) => type.code === expenseCode)[0]?.label ||
      ""
    );
  } else {
    return "";
  }
};

export const SWAPTaxDescription = (
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
