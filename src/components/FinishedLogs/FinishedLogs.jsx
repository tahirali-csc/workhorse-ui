import React, { useEffect, useRef, useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TerminalView from '../TerminalView/TerminalView';
import {
    useParams
} from "react-router-dom"
import { GetLogs, GetSteps } from '../../services/builds';

const FinishedLogs = () => {
    const [steps, setSteps] = useState([])
    const { buildId } = useParams()

    const onStepsViewClick = async (row) => {
        let logs = await GetLogs(row.id)
        console.log(logs)

        for (let i in steps) {
            if (steps[i].id == row.id) {
                let lines = logs.split('\n')
                for (let j in lines) {
                    steps[i].ref.current.write(lines[j])
                }
                return
            }
        }
    }

    useEffect(async () => {
        let steps = await GetSteps(buildId)

        let stepsViews = []
        for (let i in steps) {
            stepsViews.push({
                "id": steps[i].Id,
                "ref": React.createRef()
            })
        }
        // console.log(stepsViews)
        setSteps(stepsViews)
    }, [])

    return (
        <div>
            {
                steps.map(k =>
                    <Accordion key={k.id} style={{ 'padding': '0', 'background': 'white' }}>
                        <AccordionSummary onClick={() => onStepsViewClick(k)}
                            aria-controls="panel1a-content"
                            id="panel1a-header"></AccordionSummary>
                        <TerminalView ref={k.ref} />
                    </Accordion>
                )
            }
        </div>
    )
}

export default FinishedLogs