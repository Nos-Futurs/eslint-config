module.exports = {
  extends: ['./index'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./.eslintrc.ts.js'],
    },
  ],
};
