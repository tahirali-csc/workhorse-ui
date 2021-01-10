import React, { useState, useEffect } from 'react';
import { GetBuilds } from '../../services/builds'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import {
    Link
} from 'react-router-dom'

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#2074d4',
        color: theme.palette.common.white,
        fontSize: 16
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const Builds = () => {
    const [data, setData] = useState([])

    const getLink = (o) => {
        if (o.Status.Name === "Finished") {
            return "/finishedLogs/" + o.Id
        }
        return "/buildLogs/" + o.Id
    }

    useEffect(async () => {
        const res = await GetBuilds()
        setData(res)
        // console.log(data)
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table size="medium" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Build#</StyledTableCell>
                        <StyledTableCell>Triggered By</StyledTableCell>
                        <StyledTableCell>Build Start</StyledTableCell>
                        <StyledTableCell>Build End</StyledTableCell>
                        <StyledTableCell>Length</StyledTableCell>
                        <StyledTableCell>Status</StyledTableCell>
                        <StyledTableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.Id}>
                            <TableCell>{row.Id}</TableCell>
                            <TableCell>tahir</TableCell>
                            <TableCell>{row.StartTs}</TableCell>
                            <TableCell>{row.EndTs}</TableCell>
                            <TableCell>5min</TableCell>
                            <TableCell>{row.Status.Name}</TableCell>
                            <TableCell>
                                <Link to={getLink(row)}>Log</Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Builds