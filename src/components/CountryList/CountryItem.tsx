import * as React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Grid,
} from '@mui/material'
import Description from '../styled/Description'
import { EntityId } from '@reduxjs/toolkit'
import { useAppSelector } from '../../hooks/useAppSelector'
import { selectCountryById } from '../../app/slices/countriesSlice'

interface CountryItemProps {
  countryId: EntityId
}

const CountryItem: React.FC<CountryItemProps> = ({ countryId }) => {
  const country = useAppSelector(state => selectCountryById(state, countryId))

  if (!country) return null

  const population = country.population.toLocaleString()

  return (
    <Grid item sm={6} md={4} lg={3}>
      <Card sx={{ height: '100%', width: { xs: '264px', sm: '100%' } }}>
        <CardActionArea
          href={`/country/${country.alpha3Code}`}
          sx={{ height: '100%' }}
        >
          <CardMedia
            component="img"
            height="160"
            image={country.flag}
            alt={country.name}
          />
          <CardContent sx={{ padding: '28px 24px 42px 24px' }}>
            <Typography variant="h3" sx={{ mb: '17px' }}>
              {country.name}
            </Typography>
            <Stack spacing={0.5}>
              <Description
                variant="body2"
                term="Population"
                details={population}
              />
              <Description
                variant="body2"
                term="Region"
                details={country.region}
              />
              <Description
                variant="body2"
                term="Capital"
                details={country.capital}
              />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default React.memo(CountryItem)
