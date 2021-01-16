import React from 'react'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export const ListExpense = () => {
    return (
        <Grid item xs={12}>
            <Paper elevation={7} style={{padding: 10}}>
                <Grid container spacing={1} alignItems='center'>
                    <Grid item xs={12} md={11}>
                        <Typography variant='h6'>title(Name expense)</Typography>
                        <Typography variant='subtitle2' color='primary'>Price: 50</Typography>
                        <Typography>Currency: USD</Typography>
                        <Typography>Date: 23</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

