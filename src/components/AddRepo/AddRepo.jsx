import React from 'react'

import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Select from '@material-ui/core/Select'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'

const AddRepo = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h4" component="h4">Add Repo</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth={true} name="repoName" required id="standard-required" label="Rep Name" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth={true} name="sshURL" required id="standard-required" label="SSH URL" />
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth={true} name="httpURL" required id="standard-required" label="HTTP URL" />
            </Grid>
            <Grid item xs={12}>
                <InputLabel htmlFor="age-native-simple">Auth Type</InputLabel>
                <Select fullWidth={true}>
                    <option value={10}>Basic Auth</option>
                    <option value={10}>SSH Auth</option>
                </Select>
            </Grid>
            <Grid item xs={12} >
                <InputLabel htmlFor="age-native-simple">Secret Source</InputLabel>
                <Select fullWidth={true} label="Secret Source">
                    <option value={10}>K8 Secret</option>
                </Select>
            </Grid>
            <Grid item xs={12}>
                <TextField fullWidth={true} name="secretName" required id="standard-required" label="Secret Name" />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" >Save</Button>
            </Grid>
        </Grid>
    )
}

export default AddRepo