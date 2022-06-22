import * as React from 'react'
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from '@mui/material'
import Description from '../styled/Description'

const CountryItem: React.FC = () => {
  return (
    <Card sx={{ height: '100%', width: { xs: '264px', sm: '100%' } }}>
      <CardActionArea href={`/country/PER`} sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="160"
          image="https://flagcdn.com/pe.svg"
          alt="Peru"
        />
        <CardContent sx={{ padding: '28px 24px 40px 24px' }}>
          <Typography variant="h3" sx={{ mb: '15px' }}>
            Germany
          </Typography>
          <Stack spacing={0.5}>
            <Description term="Population" details="81,770,900" />
            <Description term="Region" details="Europe" />
            <Description term="Capital" details="Berlin" />
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CountryItem
