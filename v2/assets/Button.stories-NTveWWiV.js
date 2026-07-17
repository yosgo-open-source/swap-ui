import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./Button-BA96CW2o.js";import{n as a,t as o}from"./Stack-u7uhj71j.js";var s=t({Playground:()=>y,Sizes:()=>_,States:()=>v,Variants:()=>g,__namedExportsOrder:()=>b,default:()=>h}),c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{i(),o(),c=n(),{expect:l,fn:u,userEvent:d,within:f}=__STORYBOOK_MODULE_TEST__,p=[`primary`,`secondary`,`tertiary`,`text`,`black`,`danger`],m=[`small`,`medium`,`large`],h={title:`Inputs/Button`,component:r},g={render:()=>(0,c.jsx)(a,{direction:`row`,spacing:2,children:p.map(e=>(0,c.jsx)(r,{variant:e,children:e},e))})},_={render:()=>(0,c.jsx)(a,{direction:`row`,spacing:2,sx:{alignItems:`center`},children:m.map(e=>(0,c.jsx)(r,{variant:`primary`,size:e,children:e},e))})},v={render:()=>(0,c.jsxs)(a,{direction:`row`,spacing:2,children:[(0,c.jsx)(r,{variant:`primary`,children:`normal`}),(0,c.jsx)(r,{variant:`primary`,disabled:!0,children:`disabled`}),(0,c.jsx)(r,{variant:`primary`,loading:!0,children:`loading`})]})},y={parameters:{controls:{include:[`children`,`variant`,`size`,`loading`,`disabled`]}},args:{variant:`primary`,size:`medium`,children:`Button`,loading:!1,disabled:!1,onClick:u()},argTypes:{children:{control:`text`},variant:{control:`select`,options:p},size:{control:`select`,options:m},loading:{control:`boolean`},disabled:{control:`boolean`}},play:async({args:e,canvasElement:t})=>{let n=f(t).getByRole(`button`,{name:`Button`});await d.click(n),await l(e.onClick).toHaveBeenCalledOnce()}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      {VARIANTS.map(v => <Button key={v} variant={v}>
          {v}
        </Button>)}
    </Stack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} sx={{
    alignItems: "center"
  }}>

      {SIZES.map(s => <Button key={s} variant="primary" size={s}>
          {s}
        </Button>)}
    </Stack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2}>
      <Button variant="primary">normal</Button>
      <Button variant="primary" disabled>
        disabled
      </Button>
      <Button variant="primary" loading>
        loading
      </Button>
    </Stack>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["children", "variant", "size", "loading", "disabled"]
    }
  },
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
    loading: false,
    disabled: false,
    onClick: fn()
  },
  argTypes: {
    children: {
      control: "text"
    },
    variant: {
      control: "select",
      options: VARIANTS
    },
    size: {
      control: "select",
      options: SIZES
    },
    loading: {
      control: "boolean"
    },
    disabled: {
      control: "boolean"
    }
  },
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", {
      name: "Button"
    });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...y.parameters?.docs?.source}}},b=[`Variants`,`Sizes`,`States`,`Playground`]}));x();export{y as Playground,_ as Sizes,v as States,g as Variants,b as __namedExportsOrder,h as default,x as n,s as t};