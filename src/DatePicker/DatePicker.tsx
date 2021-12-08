import { Grow, makeStyles, Theme, useTheme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Modal } from "..";
import IconButton from "../IconButton/IconButton";
import Typography from "../Typography/Typography";
import { DatePickerProps } from "./DatePicker.types";

// Style
interface StyleForMonthButtonProps {
  selected: boolean;
}

const useStylesForMonthButton = makeStyles<Theme, StyleForMonthButtonProps>(
  (theme: Theme) => ({
    root: (props) => ({
      width: "100%",
      height: "100%",
      borderRadius: 8,
      border: props.selected
        ? `1px solid ${theme.primary.primary300}`
        : `1px solid ${theme.black.black500}`,
      boxSizing: "border-box",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
      fontWeight: 700,
      lineHeight: 1.4,
      backgroundColor: props.selected
        ? theme.primary.primary50
        : theme.black.white,
      cursor: "pointer",
      "&:hover": {
        border: props.selected
          ? `1px solid ${theme.primary.primary300}`
          : `1px solid ${theme.black.black600}`,
        backgroundColor: props.selected
          ? theme.primary.primary50
          : theme.black.black100,
      },
    }),
  })
);

const useStylesForCalendar = makeStyles((theme: Theme) => ({
  head: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
    position: "relative",
  },
  body: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
    gap: 8,
  },
  days: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    color: theme.black.black600,
  },
  date: {
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    fontSize: 14,
    fontWeight: 700,
    color: theme.black.black800,
    cursor: "pointer",
    borderRadius: "50%",
    "&:hover": {
      backgroundColor: theme.primary.primary50,
    },
  },
}));

const DatePicker: React.FC<DatePickerProps> = (props): React.ReactElement => {
  const {
    open,
    onClose,
    format,
    mobile,
    min,
    max,
    ModalProps,
    defaultValue,
    getValue,
    ...other
  } = props;
  const [year, setYear] = useState(Number(new Date().getFullYear()));
  const [month, setMonth] = useState(Number(new Date().getMonth() + 1));
  const [nextMonth, setNextMonth] = useState(1);
  const [date, setDate] = useState("");
  const [isOpenMonthSelector, setIsOpenMonthSelector] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (format === "month") {
      if (month % 2 === 0) {
        setMonth(month - 1);
      } else {
        if (month < 1) {
          setMonth(11);
          setYear(year - 1);
        }
        if (month > 12) {
          setMonth(1);
          setYear(year + 1);
        }
      }
    }
  }, [month]);

  useEffect(() => {
    if (isClicked && getValue) {
      if (format === "month") {
        if (month < 1) {
          getValue(`${year - 1}-11`);
        } else if (month > 12) {
          getValue(`${year + 1}-1`);
        } else {
          getValue(`${year}-${month}`);
        }
      } else if (format === "day") {
        getValue(date);
      } else {
        getValue(String(year));
      }
      setIsClicked(false);
    }
  }, [isClicked]);
  return (
    <div {...other}>
      {format !== "day" ? (
        <div
          style={{
            borderRadius: 8,
            border: "1px solid #cccccc",
            boxSizing: "border-box",
            width: format === "month" ? 219 : 180,
            height: 40,
            display: "grid",
            alignItems: "center",
            gridTemplateColumns: "36px 1px 1fr 1px 36px",
            position: "relative",
          }}
        >
          <IconButton
            onClick={() => {
              if (format === "month") {
                setMonth(month - 2);
              } else {
                setYear(year - 1);
              }
              setIsClicked(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "8px 0 0 8px",
            }}
          >
            {icon_arrowleft}
          </IconButton>
          {verticalline}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon_calendar}
            {format === "month" ? (
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginLeft: 4,
                  cursor: "pointer",
                }}
                onClick={() => setIsOpenMonthSelector(!isOpenMonthSelector)}
              >
                {year}年{month}-{month + 1}月
              </div>
            ) : (
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginLeft: 4,
                }}
              >
                {year}年
              </div>
            )}
          </div>
          {verticalline}
          <IconButton
            onClick={() => {
              if (format === "month") {
                setMonth(month + 2);
              } else {
                setYear(year + 1);
              }
              setIsClicked(true);
            }}
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0 8px 8px 0",
            }}
          >
            {icon_arrowright}
          </IconButton>
          {format === "month" ? (
            <Grow in={isOpenMonthSelector} style={{ transformOrigin: "0 0 0" }}>
              <div
                style={{
                  border: "1px solid #cccccc",
                  borderRadius: 8,
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  boxSizing: "border-box",
                  width: 302,
                  height: 160,
                  position: "absolute",
                  backgroundColor: "#ffffff",
                  zIndex: 1,
                  top: 52,
                  left: 0,
                }}
              >
                <div
                  style={{
                    height: 48,
                    padding: 8,
                    display: "grid",
                    gridTemplateColumns: "32px 1fr 32px",
                    gap: 13,
                    alignItems: "center",
                    boxShadow: "0px 1px 0px #ECECEC",
                  }}
                >
                  <IconButton
                    hoverColor="black400"
                    onClick={() => {
                      setYear(year - 1);
                      setIsClicked(true);
                    }}
                  >
                    {icon_arrowleft}
                  </IconButton>
                  <Typography
                    variant="subtitle"
                    style={{ textAlign: "center" }}
                  >
                    {year}年
                  </Typography>
                  <IconButton
                    hoverColor="black400"
                    onClick={() => {
                      setYear(year + 1);
                      setIsClicked(true);
                    }}
                  >
                    {icon_arrowright}
                  </IconButton>
                </div>
                <div
                  style={{
                    padding: 16,
                    display: "grid",
                    alignItems: "center",
                    gap: 8,
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "36px 36px",
                  }}
                >
                  {Array.from(Array(6).keys()).map((_i, i) => (
                    <MonthButton
                      key={i}
                      index={i}
                      month={month}
                      setMonth={setMonth}
                      setIsOpenMonthSelector={setIsOpenMonthSelector}
                      setIsClicked={setIsClicked}
                    />
                  ))}
                </div>
              </div>
            </Grow>
          ) : null}
        </div>
      ) : (
        <Modal
          bodyPadding={mobile ? 16 : undefined}
          fullWidth={mobile}
          open={open}
          onClose={onClose}
          size={mobile ? undefined : "medium"}
          label={
            !mobile ? (
              <Typography variant="h6">
                <span style={{ fontWeight: 400 }}>已選擇：</span>
                {date &&
                  `${date.split("-")[0]}年${date.split("-")[1]}月${
                    date.split("-")[2]
                  }日`}
              </Typography>
            ) : (
              <>
                <Typography variant="caption2">
                  <span style={{ fontWeight: 400 }}>已選擇：</span>
                </Typography>
                <Typography variant="subtitle">
                  {date &&
                    `${date.split("-")[0]}年${date.split("-")[1]}月${
                      date.split("-")[2]
                    }日`}
                </Typography>
              </>
            )
          }
          primaryButton={{
            title: "確認",
            onClick: () => {
              onClose();
            },
          }}
          secondaryButton={{ title: "取消", onClick: onClose }}
          children={
            !mobile ? (
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Calendar
                  month={month}
                  year={year}
                  date={date}
                  setDate={setDate}
                  min={min}
                  max={max}
                  position="left"
                  leftClick={() => {
                    if (month - 1 < 1) {
                      setMonth(12);
                      setYear(year - 1);
                    } else {
                      setMonth(month - 1);
                    }
                    setNextMonth(month);
                  }}
                  defaultValue={defaultValue}
                  setIsClicked={setIsClicked}
                />
                <Calendar
                  month={nextMonth}
                  year={month > nextMonth ? year + 1 : year}
                  date={date}
                  setDate={setDate}
                  min={min}
                  max={max}
                  position="right"
                  rightClick={() => {
                    if (nextMonth + 1 > 12) {
                      setMonth(12);
                      setNextMonth(1);
                    } else if (month + 1 > 12) {
                      setMonth(1);
                      setNextMonth(2);
                      setYear(year + 1);
                    } else {
                      setMonth(month + 1);
                      setNextMonth(nextMonth + 1);
                    }
                  }}
                  defaultValue={defaultValue}
                  setIsClicked={setIsClicked}
                />
              </div>
            ) : (
              <Calendar
                month={month}
                year={year}
                date={date}
                setDate={setDate}
                min={min}
                max={max}
                position="left"
                leftClick={() => {
                  if (month - 1 < 1) {
                    setMonth(12);
                    setYear(year - 1);
                  } else {
                    setMonth(month - 1);
                  }
                  setNextMonth(month);
                }}
                rightClick={() => {
                  if (nextMonth + 1 > 12) {
                    setMonth(12);
                    setNextMonth(1);
                  } else if (month + 1 > 12) {
                    setMonth(1);
                    setNextMonth(2);
                    setYear(year + 1);
                  } else {
                    setMonth(month + 1);
                    setNextMonth(nextMonth + 1);
                  }
                }}
                defaultValue={defaultValue}
                setIsClicked={setIsClicked}
                mobile={mobile}
              />
            )
          }
          {...ModalProps}
        />
      )}
    </div>
  );
};

interface MonthButtonProps {
  index: number;
  month?: number;
  setMonth: (month: number) => void;
  setIsOpenMonthSelector: (isOpenMonthSelector: boolean) => void;
  setIsClicked: (isClicked: boolean) => void;
}

const MonthButton = ({
  index,
  month,
  setMonth,
  setIsOpenMonthSelector,
  setIsClicked,
}: MonthButtonProps) => {
  const styleProps: StyleForMonthButtonProps = {
    selected: 1 + 2 * index === month,
  };
  const classes = useStylesForMonthButton(styleProps);
  return (
    <div
      className={classes.root}
      onClick={() => {
        setMonth(1 + 2 * index);
        setIsOpenMonthSelector(false);
        setIsClicked(true);
      }}
    >
      {1 + 2 * index}-{2 + 2 * index}月
    </div>
  );
};

interface CalendarProps {
  year: number;
  month: number;
  date: string;
  setDate: (date: string) => void;
  min: string;
  max: string;
  leftClick?: () => void;
  rightClick?: () => void;
  position: "left" | "right";
  defaultValue: string;
  setIsClicked: (isClicked: boolean) => void;
  mobile?: boolean;
}

const Calendar = ({
  year,
  month,
  setDate,
  date,
  min,
  max,
  leftClick,
  rightClick,
  position,
  defaultValue,
  setIsClicked,
  mobile,
}: CalendarProps) => {
  const isBigMonth: boolean =
    (month <= 7 && month % 2 !== 0) || (month >= 8 && month % 2 === 0);
  const today = defaultValue ? new Date(defaultValue) : new Date();
  const selectedYear = Number(date.split("-")[0]);
  const selectedMonth = Number(date.split("-")[1]);
  const selectedDate = Number(date.split("-")[2]);

  const msOfMin = min ? new Date(min).getTime() : 0;
  const msOfMax = max ? new Date(max).getTime() : 0;
  const msOfFirstDayOfMonth = new Date(`${year}-${month}-1`).getTime();
  const msOfLastDayOfMonth = new Date(
    `${year}-${month}-${
      month === 2 ? (year % 4 === 0 ? 29 : 28) : isBigMonth ? 31 : 30
    }`
  ).getTime();

  const arrowDisabled: boolean =
    (msOfMin !== 0 && position === "left" && msOfFirstDayOfMonth <= msOfMin) ||
    (msOfMax !== 0 && position === "right" && msOfLastDayOfMonth >= msOfMax);
  const mobileLeftArrowDisabled: boolean =
    msOfMin !== 0 && msOfFirstDayOfMonth <= msOfMin;
  const mobileRightArrowDisabled: boolean =
    msOfMax !== 0 && msOfLastDayOfMonth >= msOfMax;

  const classes = useStylesForCalendar();
  const theme = useTheme();
  return (
    <div>
      <div className={classes.head}>
        {year}年{month}月
        {!mobile ? (
          <IconButton
            onClick={position === "left" ? leftClick : rightClick}
            disabled={arrowDisabled}
            style={{
              position: "absolute",
              left: position === "left" ? 8 : undefined,
              right: position === "left" ? undefined : 8,
              top: 8,
              opacity: arrowDisabled ? 0.4 : undefined,
            }}
          >
            {position === "left" ? icon_arrowleft : icon_arrowright}
          </IconButton>
        ) : (
          <>
            <IconButton
              onClick={leftClick}
              disabled={mobileLeftArrowDisabled}
              style={{
                position: "absolute",
                left: 8,
                top: 8,
                opacity: mobileLeftArrowDisabled ? 0.4 : undefined,
              }}
            >
              {icon_arrowleft}
            </IconButton>
            <IconButton
              onClick={rightClick}
              disabled={mobileRightArrowDisabled}
              style={{
                position: "absolute",
                right: 8,
                top: 8,
                opacity: mobileRightArrowDisabled ? 0.4 : undefined,
              }}
            >
              {icon_arrowright}
            </IconButton>
          </>
        )}
      </div>
      <div className={classes.body}>
        {["日", "一", "二", "三", "四", "五", "六"].map((i) => (
          <div key={i} className={classes.days}>
            {i}
          </div>
        ))}
        {Array.from(
          Array(
            month === 2
              ? year % 4 === 0
                ? 29 + firstDayOfMonth(year, month)
                : 28 + firstDayOfMonth(year, month)
              : isBigMonth
              ? 31 + firstDayOfMonth(year, month)
              : 30 + firstDayOfMonth(year, month)
          ).keys()
        ).map((_i, i) => {
          if (i + 1 <= firstDayOfMonth(year, month))
            return (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                }}
              ></div>
            );
          const dateNumber = i + 1 - firstDayOfMonth(year, month);
          const isSelected: boolean =
            year === selectedYear &&
            month === selectedMonth &&
            dateNumber === selectedDate;

          const isToday: boolean =
            year === today.getFullYear() &&
            month === today.getMonth() + 1 &&
            dateNumber === today.getDate();

          const msOfDate = new Date(`${year}-${month}-${dateNumber}`).getTime();
          const disabled: boolean =
            (msOfMin !== 0 && msOfDate < msOfMin) ||
            (msOfMax !== 0 && msOfDate > msOfMax);
          return (
            <div
              key={i}
              className={classes.date}
              onClick={() => {
                setDate(`${year}-${month}-${dateNumber}`);
                setIsClicked(true);
              }}
              style={{
                backgroundColor: isSelected
                  ? theme.primary.primary400
                  : isToday
                  ? theme.black.black400
                  : undefined,
                color: isSelected ? theme.black.white : undefined,
                border: isSelected
                  ? `1px solid ${theme.primary.primary600}`
                  : undefined,
                opacity: disabled ? 0.4 : undefined,
                pointerEvents: disabled ? "none" : undefined,
              }}
            >
              {dateNumber}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const firstDayOfMonth = (year: number, month: number) => {
  const firstDay = year + "-" + month + "-" + 1;
  return new Date(firstDay).getDay();
};

const verticalline = (
  <div style={{ width: 1, height: "100%", backgroundColor: "#cccccc" }} />
);

const icon_arrowleft = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.8417 13.8167L9.02502 10L12.8417 6.175L11.6667 5L6.66669 10L11.6667 15L12.8417 13.8167Z"
      fill="black"
    />
  </svg>
);

const icon_arrowright = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.15833 13.8167L10.975 10L7.15833 6.175L8.33333 5L13.3333 10L8.33333 15L7.15833 13.8167Z"
      fill="black"
    />
  </svg>
);

const icon_calendar = (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 8.33333H10V12.5H5.83333V8.33333ZM15.8333 15.8333H4.16667V6.66667H15.8333V15.8333ZM15.8333 2.5H15V0.833332H13.3333V2.5H6.66667V0.833332H5V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V4.16667C17.5 3.72464 17.3244 3.30071 17.0118 2.98815C16.6993 2.67559 16.2754 2.5 15.8333 2.5Z"
      fill="#6F6F6F"
    />
  </svg>
);

export default DatePicker;
