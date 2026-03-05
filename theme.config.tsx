import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>OpenClaw 中文学习站</span>,
  project: {
    link: 'https://github.com/your-org/openclaw-cn',
  },
  docsRepositoryBase: 'https://github.com/your-org/openclaw-cn/tree/main',
  footer: {
    content: 'OpenClaw CN Learning Hub',
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    autoCollapse: true,
  },
}

export default config
