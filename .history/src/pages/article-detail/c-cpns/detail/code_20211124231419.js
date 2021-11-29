import React, { memo } from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
// 设置高亮样式
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// 设置高亮的语言
import {
  jsx,
  javascript,
  css
} from 'react-syntax-highlighter/dist/esm/languages/prism'

export default memo(function Code(props) {
  SyntaxHighlighter.registerLanguage('jsx', jsx)
  SyntaxHighlighter.registerLanguage('javascript', javascript)
  SyntaxHighlighter.registerLanguage('js', javascript)
  SyntaxHighlighter.registerLanguage('css', css)
  const { language, value } = props
	
  return (
    <figure className="highlight">
      <SyntaxHighlighter style={github}>
        {value}
      </SyntaxHighlighter>
    </figure>
  )
})
