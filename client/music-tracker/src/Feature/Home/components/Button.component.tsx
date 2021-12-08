import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
    return (
        <Stack direction="column" spacing={20}>
            <Button variant="contained" endIcon={<SendIcon />}>
                Visit Music Tracker
            </Button>
        </Stack>
    );
}