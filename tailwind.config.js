module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'

    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
