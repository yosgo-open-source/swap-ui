import{n as e,r as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./Stack-u7uhj71j.js";import{n as a,t as o}from"./Skeleton-DnarN6qK.js";var s=t({Playground:()=>d,Shapes:()=>u,__namedExportsOrder:()=>f,default:()=>l}),c,l,u,d,f,p=e((()=>{o(),i(),c=n(),l={title:`Feedback/Skeleton`,component:a},u={render:()=>(0,c.jsxs)(r,{spacing:1,sx:{width:240},children:[(0,c.jsx)(a,{variant:`text`}),(0,c.jsx)(a,{variant:`rectangular`,height:80}),(0,c.jsx)(a,{variant:`circular`,width:40,height:40})]})},d={parameters:{controls:{include:[`variant`,`width`,`height`]}},args:{variant:`rectangular`,width:240,height:80},argTypes:{variant:{control:`select`,options:[`text`,`rectangular`,`circular`]},width:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}},height:{control:`number`,description:`單位 px`,table:{type:{summary:`number | string`}}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Stack spacing={1} sx={{
    width: 240
  }}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      include: ["variant", "width", "height"]
    }
  },
  args: {
    variant: "rectangular",
    width: 240,
    height: 80
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "rectangular", "circular"]
    },
    width: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    },
    height: {
      control: "number",
      description: "單位 px",
      table: {
        type: {
          summary: "number | string"
        }
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`Shapes`,`Playground`]}));p();export{d as Playground,u as Shapes,f as __namedExportsOrder,l as default,p as n,s as t};