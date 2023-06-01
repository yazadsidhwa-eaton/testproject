import React from 'react';
import { Box, Typography, SvgIconProps } from '@mui/material';
// import { Search } from '@mui/icons-material';
// import { SvgIconProps } from '@mui/material/SvgIcon';

type CustomComponentProps = {
    Icon: React.ElementType<SvgIconProps>;
    title?: string;
    description?: string;
};

export const CustomComponent: React.FC<CustomComponentProps> = (props) => {
    const { title, description, Icon } = props;
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                maxWidth: 1100,
            }}
        >
            <Icon
                sx={{
                    fontSize: '625%', // You can adjust the size to your need
                    fill: '#80BDE0',
                }}
            />

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1">{description}</Typography>
            </Box>
        </Box>
    );
};
