import * as React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

/**
 * https://mui.com/material-ui/guides/routing/#global-theme-link
 */
export const LinkBehavior = React.forwardRef<
  any,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})
