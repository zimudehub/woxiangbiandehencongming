// 内容配置：改这里就能替换全站文案。
// 简历、邮箱、时间线均为示例，按你的真实经历替换即可。

const img = (prompt, size) =>
  `https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;

export const profile = {
  name: "谭谈",
  latin: "TAN TAN",
  role: "资深工程师 · 前端架构与性能",
  location: "杭州 / Remote",

  hero: {
    image: img(
      "wide cinematic photograph of a dark quiet data center corridor with rows of server racks, only small green and amber LED indicator lights reflecting on polished concrete floor, atmospheric volumetric haze, muted teal and graphite palette, 35mm film grain, photorealistic, no people, no readable text, no logos",
      "landscape_16_9"
    ),
    headline: ["把复杂的系统，", "做得安静一些。"],
    lede: "过去十年在前端架构与性能领域做工程，先后在阿里、网易负责亿级产品。现在做独立工程咨询。",
    scroll: "向下",
  },

  about: {
    image: img(
      "editorial portrait photograph of a focused East Asian male software engineer in his mid thirties, plain dark zip hoodie, standing against a raw concrete wall in a minimal open studio, soft single source key light from the side, calm confident expression, shallow depth of field, muted warm graphite palette, 85mm lens, fine film grain, photorealistic, no text, no logos",
      "portrait_4_3"
    ),
    label: "关于",
    title: "工程是把耐心\n翻译成可用的东西。",
    body: [
      "我是谭谈，做过 C 端亿级流量的架构，也做过凌晨三点的页面；关心首屏时间、可观测性、和别人愿不愿意接我的代码。",
      "平时写一些关于性能、工程化和团队协作的长文，也帮团队做代码评审与架构梳理。",
    ],
    facts: [
      ["坐标", "杭州，可远程"],
      ["经验", "10 年 · 阿里 / 网易"],
      ["专注", "架构 · 性能 · 工程化"],
      ["状态", "接受 2026 春季咨询"],
    ],
    capabilities: [
      "前端架构 / 微前端",
      "性能与可观测性",
      "Node / 边缘计算",
      "团队工程化",
      "设计系统",
      "代码评审",
    ],
  },

  band: {
    image: img(
      "abstract close-up photograph of stacked dark motherboards and ribbon cables on a metal shelf, subtle amber and graphite indicator glow, shallow depth of field, moody muted palette, 35mm film grain, photorealistic, no readable text, no logos, no people",
      "landscape_16_9"
    ),
    lines: [
      "好的架构，",
      "让一百万人感觉不到它的存在。",
      "性能不是参数，",
      "是用户没说出口的尊重。",
    ],
    caption: "工程观 · 长文陆续整理中",
  },

  timeline: [
    {
      year: "2020 — 至今",
      role: "资深前端工程师",
      org: "阿里巴巴",
      note: "负责双十一主会场核心链路的前端架构与性能优化，将关键路径首屏稳定在 1.2s 内，支撑亿级 PV。",
    },
    {
      year: "2016 — 2020",
      role: "高级工程师",
      org: "网易",
      note: "从 0 到 1 搭建电商业务的前端工程化体系，主导中后台设计系统与跨端方案落地。",
    },
    {
      year: "2013 — 2016",
      role: "前端工程师",
      org: "早期创业团队",
      note: "全栈负责产品从想法到上线，建立团队最早的代码规范与发布流程。",
    },
  ],

  contact: {
    label: "联系",
    title: "想聊架构\n或做点难的活？",
    lede: "接受前端架构咨询、性能优化与团队工程化梳理；欢迎直接邮件。",
    email: "hello@tantan.dev",
    links: [
      ["GitHub", "@tantan-dev"],
      ["微信公众号", "谭谈工坊"],
      ["即刻", "@tantan"],
    ],
  },
};