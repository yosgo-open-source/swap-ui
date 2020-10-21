# 關於 SWAP-UI

基於 [@material-ui/core](https://material-ui.com/) 的前端框架來開發 SWAP 專屬的介面框架，這個框架的特性如下：

1. 標準化元件。封裝常用的元件，減少開發時重新定義相同的佈局、函式...，讓介面保持一致
2. 易於使用。儘量不需要再寫額外的輔助函式或是過於多層的元件包裝就能使用

想要參考 swap-ui 可以透過以下方式：

1. 直接訪問 swap 的網站 [www.swap.work](www.swap.work)
2. 瀏覽 [Storkbook](https://yosgo-open-source.github.io/swap-ui/)

# 安裝

```
# peerDependencies
$ yarn add react react-dom styled-components @material-ui/core @material-ui/icons

# install swap-ui
$ yarn add @yosgo/swap-ui
```

# 開發

```
# 產生一個元件範本
$ yarn generate NewComponentName

# 使用本機的 storybook 來瀏覽元件
$ yarn storybook
```

# 發佈

```
# 發佈套件到 NPM 上
$ npm publish

# 更新 gh-page 上的 Storybook
$ yarn deploy-storybook

# 確認發佈狀態
$ npm show @yosgo/swap-ui
```

# 參考資料

- [Creating a React Component Library using Rollup, Typescript, Sass and Storybook](https://blog.harveydelaney.com/creating-your-own-react-component-library/)
- [Material-ui and Typescript error when bundling #29](https://github.com/transitive-bullshit/react-modern-library-boilerplate/issues/29#issuecomment-635883117)
- [Shopify Polaris](https://5d559397bae39100201eedc1-jyzwfelqxv.chromatic.com/)
