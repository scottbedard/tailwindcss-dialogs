import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities, addVariant }) => {
  addUtilities({
    '.allow-discrete': {
      transitionBehavior: 'allow-discrete',
    },
  })

  addVariant('backdrop', '&::backdrop')

  addVariant('open', '&[open]')

  addVariant('from', '@starting-style')
})
