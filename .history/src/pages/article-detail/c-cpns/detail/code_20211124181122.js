import React, { memo } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// 设置高亮的语言
import {
  jsx,
  javascript,
  html,
  css,
  vue
} from 'react-syntax-highlighter/dist/esm/languages/prism'

export default memo(function Code(props) {
  SyntaxHighlighter.registerLanguage('jsx', jsx)
  SyntaxHighlighter.registerLanguage('javascript', javascript)
  SyntaxHighlighter.registerLanguage('js', javascript)
  SyntaxHighlighter.registerLanguage('html', html)
  SyntaxHighlighter.registerLanguage('css', css)
  SyntaxHighlighter.registerLanguage('vue', vue)
  const { language, value } = props
	
  return (
    <figure className="highlight">
      <SyntaxHighlighter language={language} style={dark}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
})
