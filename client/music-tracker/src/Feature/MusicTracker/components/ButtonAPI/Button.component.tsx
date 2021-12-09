import * as React from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';
import Stack from '@mui/material/Stack';

export default function RefreshButton() {
    return (
        <Stack direction="column" spacing={20}>
            <Button variant="contained" endIcon={<RefreshIcon />}>
                Refresh data from AWS
            </Button>
        </Stack>
    );
}