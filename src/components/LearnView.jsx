import React, { useEffect, useState } from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import { Button } from '@material-ui/core'
import TerminalView from './TerminalView/TerminalView';

const LearnView = () => {

    const [stepsMap, setStepsMap] = useState(() => new Map())
    const [currentStepId, setCurrentStepId] = useState(-1)
    const [currentMsg, setCurrentMsg] = useState("")

    useEffect(() => {
        console.log("Triggered", currentStepId)
        if (currentStepId != -1) {
            console.log("Got===", currentStepId, currentMsg)
            stepsMap.get(currentStepId).current.write(currentMsg)
        }
    }, [currentStepId, currentMsg])

    const handleMessage = (e) => {
        console.log(e)
        // setList(l => l.concat(e.data))
        // setList(l => ([...l, e.data]))
        const row = JSON.parse(e.data)

        setStepsMap(prev => {
            let newMap = new Map(prev)
            if (!newMap.has(row.stepId)) {
                newMap.set(row.stepId, React.createRef())
            }
            setCurrentStepId(row.stepId)
            setCurrentMsg(row.data)
            return newMap
        })
        // console.log("State===", slog.get(row.stepId))
    }

    useEffect(() => {
        const es = new EventSource("http://localhost:8083/api/events")
        es.onmessage = handleMessage

        const handleClose = (e) => {
            es.close()
            console.log("Closing Event Source")
            console.log(e)
        }
        es.addEventListener("close", handleClose)

        return () => {
            es.removeEventListener("close", handleClose)
            es.close()
        }
    }, [])

    return (
        <div>
            {
                [...stepsMap.keys()].map(k =>
                    <Accordion key={k} style={{ 'padding': '0', 'background': 'white' }}>
                        <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header"></AccordionSummary>
                        <TerminalView ref={stepsMap.get(k)} />
                    </Accordion>
                )
            }
        </div>
    )
}

export default LearnView