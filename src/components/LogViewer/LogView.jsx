import React, { useEffect, useRef, useState } from 'react'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import TerminalView from '../TerminalView/TerminalView';
import { Button } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom"

const LogsView = () => {
    const [stepsMap, setStepsMap] = useState(() => new Map())
    const [currentStepId, setCurrentStepId] = useState(-1)
    const [currentMsg, setCurrentMsg] = useState("")
    const {buildId} = useParams()

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

        // setStepsMap(prev => {
        //     // let newMap = new Map(prev)
        //     // if (!newMap.has(row.StepId)) {
        //     //     newMap.set(row.StepId, React.createRef())
        //     // }
        //     // setCurrentStepId(row.StepId)
        //     // setCurrentMsg(row.Message)
        //     return newMap
        // })

        setCurrentStepId(row.StepId)
        setCurrentMsg(row.Message)
    }

    const handleNotify = (e) => {
        const row = JSON.parse(e.data)
        if (row.Status === "Started"){
            console.log("Notify", row)

            setStepsMap(prev => {
                let newMap = new Map(prev)
                if (!newMap.has(row.StepId)) {
                    newMap.set(row.StepId, React.createRef())
                }
                return newMap
            })
        }
    }

    useEffect(() => {
        const es = new EventSource("http://localhost:8080/api/logs?buildNumber=" + buildId)
        es.onmessage = handleMessage

        const handleClose = (e) => {
            es.close()
            console.log("Closing Event Source")
            console.log(e)
        }
        es.addEventListener("close", handleClose)
        es.addEventListener("notify", handleNotify)

        return () => {
            es.removeEventListener("close", handleClose)
            es.removeEventListener("notify", handleNotify)
            es.close()
        }
    }, [])

    console.log("Current Build ID:::", buildId)

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

export default LogsView