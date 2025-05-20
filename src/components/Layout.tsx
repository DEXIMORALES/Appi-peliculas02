import { Stack } from '@mui/material'
import type { FC, PropsWithChildren } from 'react';


export const Layout: FC<PropsWithChildren> = ({children}) => {
  return (
     <Stack
      justifyContent="center"
      bgcolor="#242e34"
      minHeight="100vh"
      component="main"
      alignItems="center"
    >
      {children}
    </Stack>
  )
}
