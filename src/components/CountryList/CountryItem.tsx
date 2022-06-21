import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from '@mui/material'
import * as React from 'react'

const CountryItem: React.FC = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://flagcdn.com/pe.svg"
          alt="Peru"
        />
        <CardContent sx={{ padding: '24px 24px 36px 24px' }}>
          <Typography variant="h3" sx={{ mb: '16px' }}>
            Peru
          </Typography>
          <Stack spacing={0.5}>
            <Typography sx={{ fontWeight: 300 }}>
              <strong style={{ fontWeight: 600 }}>Population: </strong>32971846
            </Typography>
            <Typography sx={{ fontWeight: 300 }}>
              <strong style={{ fontWeight: 600 }}>Region: </strong>Americas
            </Typography>
            <Typography sx={{ fontWeight: 300 }}>
              <strong style={{ fontWeight: 600 }}>Capital: </strong>Lima
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CountryItem
