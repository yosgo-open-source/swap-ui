import { Grid, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import AutoComplete, {
  AutocompleteCloseReason,
} from "../AutoComplete/AutoComplete";
import MenuItem from "../Menu/MenuItem";
import Select from "../Menu/Select";
import TextField from "../TextField/TextField";

import {
  TaxTextFieldProps,
  ExpenseCodeProps,
  IncomeCodeProps,
} from "./TaxTextField.types";

const TaxTextField: React.FC<TaxTextFieldProps> = ({ onChange }) => {
  const [modalIncome, setModalIncome]: any = useState("");
  const [modalExpense, setModalExpense]: any = useState("");
  const [open, setOpen] = useState(false);

  const handleModalTaxDescription = () => {
    try {
      if (
        (modalIncome !== "50" && modalExpense.length === 0) ||
        (modalIncome !== "50" && !modalExpense)
      )
        throw "請選擇費用類別";
      /**呼叫 onChnage props */
      let value = {
        incomeCode: modalIncome,
        expenseCode: modalExpense,
        incomeLabel: SWAPTaxIncomeLabel(modalIncome),
        expenseLabel: SWAPTaxExpenseLabel(modalExpense),
        taxDescription: SWAPTaxDescription(modalIncome, modalExpense),
      };
      onChange(value);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (modalIncome) {
      handleModalTaxDescription();
    }
  }, [modalIncome, modalExpense]);

  // 執行業務類別
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = (
    _event: React.ChangeEvent<{}>,
    reason: AutocompleteCloseReason
  ) => {
    if (reason === "toggleInput") {
      return;
    }
    if (anchorEl) {
      anchorEl.focus();
    }
    setAnchorEl(null);
  };
  const theme = useTheme();
  return (
    <Grid container spacing={1} alignContent="flex-start">
      <Grid
        item
        xs={modalIncome === "9A" || modalIncome === "9B" ? 6 : 12}
        sm={modalIncome === "9A" || modalIncome === "9B" ? 6 : 12}
        md={modalIncome === "9A" || modalIncome === "9B" ? 6 : 12}
        lg={modalIncome === "9A" || modalIncome === "9B" ? 6 : 12}
      >
        <Select
          height={56}
          paddingTop={17}
          paddingLeft={16}
          placeholder="選擇申報類別"
          value={modalIncome}
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
          onChange={(e) => {
            setModalIncome(e.target.value);
            setModalExpense("");
          }}
          vertical={-8}
          horizontal="left"
        >
          <MenuItem
            height={36}
            disabled
            style={{
              fontSize: 12,
              fontWeight: 700,
              lineHeight: 1.4,
              color: "#4b4b4b",
            }}
          >
            請選擇申報類別
          </MenuItem>
          {SWAPIncomeTypes.map((option, index) => (
            <MenuItem
              height={36}
              key={`case_${index}`}
              value={option.code}
              style={{
                backgroundColor: modalIncome === option.code ? "white" : null,
                opacity: modalIncome === option.code ? 1 : null,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                color:
                  modalIncome === option.code ? theme.primary.primary400 : null,
              }}
              disabled={modalIncome === option.code}
              iconChildren={
                modalIncome === option.code && open ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.4998 5.83345L7.49984 15.8334L2.9165 11.2501L4.0915 10.0751L7.49984 13.4751L16.3248 4.65845L17.4998 5.83345Z"
                      fill="#4862CC"
                    />
                  </svg>
                ) : null
              }
            >
              {option.code} {option.label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        {(() => {
          if (modalIncome === "9A" || modalIncome === "9B") {
            let options = SWAPExpenseTypes.filter(
              (i) => i.source === modalIncome
            );
            const value = modalExpense
              ? `[${modalExpense}] ${
                  options.filter((i) => i.code === modalExpense)[0].label
                }`
              : "";
            return (
              <>
                <TextField
                  fullWidth
                  label="輸入執行業務類別"
                  height={56}
                  value={value}
                  onClick={handleClick}
                  InputProps={{
                    endAdornment: (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.83333 8.33334L9.99999 12.5L14.1667 8.33334H5.83333Z"
                          fill="black"
                        />
                      </svg>
                    ),
                  }}
                />
                <AutoComplete
                  disableFreeInput
                  multiple
                  disableCloseOnSelect
                  disablePortal
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  handleNoOptionsValueChange={(e: any) => setModalExpense(e)}
                  onChange={(_: any, newValue: any) => {
                    if (newValue[0].code) {
                      setModalExpense(newValue.pop().code);
                    }
                    setAnchorEl(null);
                  }}
                  width={380}
                  value={value}
                  options={options}
                  placement="bottom"
                  placeholder="輸入執行業務類別"
                  title="選擇執行業務類別"
                  renderOption={(option) => (
                    <div>
                      [{option.code}] {option.label}
                    </div>
                  )}
                  getOptionLabel={(option) => option.code + option.label}
                />
              </>
            );
          } else {
            return <div />;
          }
        })()}
      </Grid>
    </Grid>
  );
};

export default TaxTextField;

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
