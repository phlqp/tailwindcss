export default function () {
  return function ({ addUtilities, variants }) {
    addUtilities(
      {
        '.select-none': {
          '-webkit-user-select': 'none',
          'user-select': 'none',
        },
        '.select-text': {
          '-webkit-user-select': 'text',
          'user-select': 'text',
        },
        '.select-all': {
          '-webkit-user-select': 'all',
          'user-select': 'all',
        },
        '.select-auto': {
          '-webkit-user-select': 'auto',
          'user-select': 'auto',
        },
      },
      variants('userSelect')
    )
  }
}
