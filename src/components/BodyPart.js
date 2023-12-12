import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className='bodyPart-card'
            sx={{
                borderTop: bodyPart === item ? '4px solid orange' : "",
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '280px',
                height: '280px',
                cursor: 'pointer',
                gap: '40px'
            }}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt='' style={{ width: '40px', height: '40px' }} />
            <h6 className='text-xl font-mono font-bold'>{item}</h6>

        </Stack>
    )
}

export default BodyPart
