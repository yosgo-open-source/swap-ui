import * as React from "react";
import { useEffect, useState } from "react";
import AutoComplete from "./AutoComplete";
import type { AutocompleteCloseReason } from "./AutoComplete";
import MenuItem from "./MenuItem";
import TextField from "./TextField";
import { swapColors as c } from "../theme/tokens";
import {
  SWAPIncomeTypes,
  SWAPExpenseTypes,
  SWAPTaxIncomeLabel,
  SWAPTaxExpenseLabel,
  SWAPTaxDescription,
} from "../tax/constants";
import type { TaxTextFieldProps, ExpenseCodeProps, IncomeCodeProps } from "./TaxTextField.types";

const checkSvg = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.4998 5.83345L7.49984 15.8334L2.9165 11.2501L4.0915 10.0751L7.49984 13.4751L16.3248 4.65845L17.4998 5.83345Z"
      fill="#4862CC"
    />
  </svg>
);

const headerItemStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1.4,
  color: "#4b4b4b",
  opacity: 1,
  backgroundColor: "white",
};

const TaxTextField: React.FC<TaxTextFieldProps> = ({
  onChange,
  codeValue,
  domainValue,
  domainCodeValue,
  codeError,
  codeHelperText,
  domainError,
  domainHelperText,
  codeOnClick,
  domainOnClick,
  mobile,
  height = 56,
  codeFocused,
  domainFocused,
}) => {
  const [modalIncome, setModalIncome] = useState<IncomeCodeProps | "">("");
  const [modalExpense, setModalExpense] = useState<ExpenseCodeProps | "">("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  useEffect(() => {
    if (!modalIncome) return;
    onChange?.({
      incomeCode: modalIncome as IncomeCodeProps,
      expenseCode: modalExpense as ExpenseCodeProps,
      incomeLabel: SWAPTaxIncomeLabel(modalIncome as IncomeCodeProps),
      expenseLabel: SWAPTaxExpenseLabel(modalExpense as ExpenseCodeProps),
      taxDescription: SWAPTaxDescription(modalIncome as IncomeCodeProps, modalExpense as ExpenseCodeProps),
      expenseCodeAndLabel: modalExpense
        ? `[${modalExpense}] ${SWAPTaxExpenseLabel(modalExpense as ExpenseCodeProps)}`
        : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIncome, modalExpense]);

  const handleCodeClick = () => {
    codeOnClick?.();
    setAnchorEl(null);
  };
  const handleDomainClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    if (codeValue) setModalIncome(codeValue);
    domainOnClick?.();
  };
  const handleClose = (_e: unknown, reason: AutocompleteCloseReason) => {
    if (reason === "toggleInput") return;
    anchorEl?.focus();
    setAnchorEl(null);
  };

  const selectedIcon = (active: boolean) => (active ? checkSvg : null);

  // 桌機兩欄等寬（flex-basis 0 均分剩餘空間；minWidth 0 解除 min-content 下限，
  // 否則內容較寬的欄位——如「9A 執行業務所得」——會被撐寬造成左右不等）
  const columnStyle: React.CSSProperties = mobile
    ? { width: "100%" }
    : { flexGrow: 1, flexShrink: 1, flexBasis: 0, minWidth: 0 };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
      }}
    >
      {/* 選擇申報類別 */}
      <div style={columnStyle}>
        <TextField
          focused={codeFocused}
          fullWidth
          select
          error={codeError}
          helperText={codeHelperText}
          height={height}
          label="選擇申報類別"
          value={codeValue ?? ""}
          onClick={handleCodeClick}
          onChange={(e) => {
            setModalIncome(e.target.value as IncomeCodeProps);
            setModalExpense("");
          }}
        >
          <MenuItem height={36} disabled style={headerItemStyle}>
            請選擇申報類別
          </MenuItem>
          {SWAPIncomeTypes.map((option, index) => (
            <MenuItem
              height={36}
              key={`case_${index}`}
              value={option.code}
              style={{
                backgroundColor: modalIncome === option.code ? "white" : undefined,
                opacity: modalIncome === option.code ? 1 : undefined,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                color: modalIncome === option.code ? c.primary.primary400 : undefined,
              }}
              disabled={modalIncome === option.code}
              iconChildren={selectedIcon(modalIncome === option.code)}
            >
              {option.code} {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {codeValue === "9A" || codeValue === "9B" ? (
        <div style={{ ...columnStyle, margin: mobile ? "24px 0 0 0" : "0 0 0 8px" }}>
          {codeValue === "9B" ? (
            // 9B：下拉選單
            <TextField
              focused={domainFocused}
              select
              fullWidth
              error={domainError}
              helperText={domainHelperText}
              height={height}
              label="輸入執行業務類別"
              value={domainCodeValue ?? ""}
              onClick={handleDomainClick}
              onChange={(e) => {
                setModalExpense(e.target.value as ExpenseCodeProps);
                setAnchorEl(null);
              }}
            >
              <MenuItem height={36} disabled style={headerItemStyle}>
                選擇執行業務類別
              </MenuItem>
              {SWAPExpenseTypes.filter((i) => i.source === codeValue).map((option, index) => (
                <MenuItem
                  height={36}
                  key={`case_${index}`}
                  value={option.code}
                  style={{
                    backgroundColor: modalExpense === option.code ? "white" : undefined,
                    opacity: modalExpense === option.code ? 1 : undefined,
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                    color: modalExpense === option.code ? c.primary.primary400 : undefined,
                  }}
                  disabled={modalExpense === option.code}
                  iconChildren={selectedIcon(modalExpense === option.code)}
                >
                  [{option.code}] {option.label}
                </MenuItem>
              ))}
            </TextField>
          ) : (
            // 9A：搜尋式選單
            <>
              <TextField
                focused={domainFocused}
                error={domainError}
                helperText={domainHelperText}
                fullWidth
                label="輸入執行業務類別"
                height={height}
                value={domainValue ?? ""}
                onClick={handleDomainClick}
                slotProps={{
                  input: {
                    readOnly: true,
                    endAdornment: (
                      <div style={{ width: 24, height: 24 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 10L12 15L17 10H7Z" fill="black" />
                        </svg>
                      </div>
                    ),
                  },
                }}
              />
              <AutoComplete
                width={mobile ? "calc(100% - 32px)" : "292px"}
                optionsMaxHeight={150}
                disableFreeInput
                multiple
                disableCloseOnSelect
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onChange={(_, newValue) => {
                  const arr = newValue as Array<{ code?: ExpenseCodeProps }>;
                  const last = arr[arr.length - 1];
                  if (last?.code) setModalExpense(last.code);
                  setAnchorEl(null);
                }}
                value={domainValue}
                options={SWAPExpenseTypes.filter((i) => i.source === codeValue)}
                placement="bottom-start"
                placeholder="輸入執行業務類別"
                title="選擇執行業務類別"
                renderOption={(liProps, option) => {
                  const o = option as { code: string; label: string };
                  const { key, ...rest } = liProps as { key?: React.Key } & React.HTMLAttributes<HTMLLIElement>;
                  return (
                    <li key={key} {...rest}>
                      [{o.code}] {o.label}
                    </li>
                  );
                }}
                getOptionLabel={(option) => {
                  const o = option as { code: string; label: string };
                  return o.code + o.label;
                }}
              />
            </>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default TaxTextField;
