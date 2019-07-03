import { Rule } from 'eslint';
const rule: Rule.RuleModule = {
  meta: {
    docs: {
      description: '禁止块级注释',
      category: 'Stylistic Issues',
      recommended: true
    }
  },
  create: function (context) {
    const sourceCode = context.getSourceCode()
    return {
      Program () {
        if (context) {
          const comments = sourceCode.getAllComments()
          const blockComments = comments.filter(({ type, loc: { start: { line, column } } }) => type === 'Block' && line === 1 && column === 0)
          console.log('blockComments ===>', blockComments[0])
          !blockComments.length && context.report({
            message: 'needs to add file header',
            loc: {
              line: 1,
              column: 0
            }
          })
        }
      }
    }
  }
}

export default rule;
