import * as classNames from 'classnames'
const memoize = require('lodash/memoize')

interface initParams {
  prefix: string;
  theme: string;
}

export function classnames ({prefix, theme}: initParams): string {
  return memoize(function (suffix: string, className: string): string {
    return classNames({
      [`${prefix}`]: !!prefix && !suffix,
      [`${prefix}-${theme}`]: !!prefix && !suffix && !!theme,
      [`${prefix}-${suffix}`]: !!prefix && !!suffix,
      [`${prefix}-${theme}-${suffix}`]: !!prefix && !!suffix && !!theme
    }, className)
  })
}

export default classnames
