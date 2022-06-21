import * as React from 'react'
import { Container, Grid } from '@mui/material'
import CountryItem from './CountryItem'

interface CountryListProps {}

const CountryList: React.FC<CountryListProps> = () => {
  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 5, lg: 6, xl: 9.5 }}
        alignItems={{ xs: 'center', sm: 'stretch' }}
        flexDirection={{ xs: 'column', sm: 'row' }}
      >
        <Grid item sm={6} md={4} lg={3}>
          <CountryItem />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <CountryItem />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <CountryItem />
        </Grid>
        <Grid item sm={6} md={4} lg={3}>
          <CountryItem />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CountryList
