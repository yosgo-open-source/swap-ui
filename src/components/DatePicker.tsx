import * as React from "react";
import dayjs, { type Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Modal from "./Modal";
import type { DatePickerProps } from "./DatePicker.types";

const VIEWS = {
  year: ["year"] as const,
  month: ["year", "month"] as const,
  day: ["year", "month", "day"] as const,
};

/** v1 相容的字串格式：year "YYYY"、month "YYYY-M"、day "YYYY-M-D"（不補零） */
function toV1String(d: Dayjs, format: "year" | "month" | "day"): string {
  if (format === "year") return String(d.year());
  if (format === "month") return `${d.year()}-${d.month() + 1}`;
  return `${d.year()}-${d.month() + 1}-${d.date()}`;
}

const DatePicker: React.FC<DatePickerProps> = ({
  format = "day",
  open = false,
  onClose,
  mobile,
  ModalProps,
  min,
  max,
  defaultValue,
  value,
  getValue,
}) => {
  const parsed = value ? dayjs(value) : defaultValue ? dayjs(defaultValue) : undefined;
  return (
    <Modal
      open={open}
      onClose={() => onClose?.()}
      title="選擇日期"
      width="fit-content"
      bodyPadding={8}
      mobile={mobile}
      {...ModalProps}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          views={[...VIEWS[format]]}
          openTo={format}
          value={parsed && parsed.isValid() ? parsed : null}
          minDate={min ? dayjs(min) : undefined}
          maxDate={max ? dayjs(max) : undefined}
          onChange={(newValue: Dayjs | null, selectionState) => {
            if (!newValue) return;
            // 到達目標精度才回呼（year/month view 的中間選擇不觸發）
            const finished =
              format === "day" ? selectionState === "finish" : true;
            const isTargetView =
              format === "day" || selectionState === "finish";
            if (finished && isTargetView) {
              getValue?.(toV1String(newValue, format));
              onClose?.();
            }
          }}
        />
      </LocalizationProvider>
    </Modal>
  );
};

export default DatePicker;
