// @ts-nocheck
export default () => {
  return [
    {
      transformRawLines(lines) {
        let inClickList = false
        let inComment = false

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i]
          if (line == null) continue

          if (line.trim().startsWith('<!--')) {
            inComment = true
            if (line.includes('-->')) inComment = false
            continue
          }
          if (inComment) {
            if (line.includes('-->')) inComment = false
            continue
          }

          if (line.match(/^(\s*)-~\s/)) {
            if (!inClickList) {
              inClickList = true
              lines.splice(i, 0, '', '<v-clicks>', '')
              i += 3
            }
            lines[i] = lines[i].replace(/^(\s*)-~\s/, '$1- ')
            continue
          }

          if (inClickList) {
            inClickList = false
            lines.splice(i, 0, '</v-clicks>', '')
            i += 2
          }

          // ~> plain click-reveal block
          if (lines[i]?.match(/^~>\s/)) {
            const content = lines[i].replace(/^~>\s/, '')
            lines.splice(i, 1, '', '<v-click>', '', content, '', '</v-click>')
            i += 5
            continue
          }

          // ~(N)> or ~(N)[classes]{style}> click-reveal at position N
          const atMatch = lines[i]?.match(/^~\((\d+)\)(?:\[([^\]]*)\])?(?:\{([^}]*)\})?>\s*(.*)/)
          if (atMatch) {
            const expanded = expandBlock(lines, i, atMatch[4], atMatch[2] || '', atMatch[3] || '', `v-click at="${atMatch[1]}"`)
            lines.splice(i, expanded.consumed, ...expanded.lines)
            i += expanded.lines.length - 1
            continue
          }

          // ~[classes]{style}> or ~{style}> styled click-reveal div
          const clickStyleMatch = lines[i]?.match(/^~(?:\[([^\]]*)\])?(?:\{([^}]*)\})?>\s*(.*)/)
          if (clickStyleMatch && (clickStyleMatch[1] || clickStyleMatch[2])) {
            const expanded = expandBlock(lines, i, clickStyleMatch[3], clickStyleMatch[1] || '', clickStyleMatch[2] || '', 'v-click')
            lines.splice(i, expanded.consumed, ...expanded.lines)
            i += expanded.lines.length - 1
            continue
          }

          // =[classes]{style} or ={style} styled block (no click)
          const styleMatch = lines[i]?.match(/^=(?:\[([^\]]*)\])?(?:\{([^}]*)\})?\s+(.*)/)
          if (styleMatch && (styleMatch[1] || styleMatch[2])) {
            const expanded = expandBlock(lines, i, styleMatch[3], styleMatch[1] || '', styleMatch[2] || '', null)
            lines.splice(i, expanded.consumed, ...expanded.lines)
            i += expanded.lines.length - 1
            continue
          }
        }

        if (inClickList) {
          lines.push('</v-clicks>', '')
        }
      },
    },
  ]
}

function expandBlock(lines, i, inlineContent, classes, style, directive) {
  const classAttr = classes ? ` class="${classes}"` : ''
  const styleAttr = style ? ` style="${style}"` : ''
  const dirAttr = directive ? ` ${directive}` : ''
  const openTag = `<div${dirAttr}${classAttr}${styleAttr}>`

  if (inlineContent) {
    return {
      lines: ['', openTag, '', inlineContent, '', '</div>'],
      consumed: 1,
    }
  }

  const contentLines = []
  let j = i + 1
  while (j < lines.length && lines[j].trim() !== '') {
    contentLines.push(lines[j])
    j++
  }
  return {
    lines: ['', openTag, '', ...contentLines, '', '</div>'],
    consumed: j - i,
  }
}
