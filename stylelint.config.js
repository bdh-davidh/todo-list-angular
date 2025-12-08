export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-use-logical-spec'],
  rules: {
    'liberty/use-logical-spec': 'always'
  }
};