import {
  swapTypographyVariants,
  SWAP_TYPOGRAPHY_VARIANTS,
  swapTypographyVariantMapping,
} from "./typography.styles";

test("涵蓋 32 個 variant", () => {
  expect(SWAP_TYPOGRAPHY_VARIANTS).toHaveLength(32);
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariants[v]).toBeDefined();
  }
});

test("關鍵 variant 的字級/字重/行高與 v1 一致", () => {
  expect(swapTypographyVariants.d1).toMatchObject({
    fontSize: "4.5rem",
    fontWeight: 700,
    lineHeight: 1.25,
  });
  expect(swapTypographyVariants.body1).toMatchObject({
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.4,
  });
  expect(swapTypographyVariants.tiny2_loose).toMatchObject({
    fontSize: "0.625rem",
    fontWeight: 400,
    lineHeight: 1.6,
  });
  expect(swapTypographyVariants.button_l).toMatchObject({
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.125,
  });
});

test("每個 variant 都有 letterSpacing 0em", () => {
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariants[v].letterSpacing).toBe("0em");
  }
});

test("variantMapping 涵蓋所有 variant", () => {
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariantMapping[v]).toBeTruthy();
  }
});
