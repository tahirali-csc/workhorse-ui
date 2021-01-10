export const GetBuilds = async () => {
    return await (await fetch("http://localhost:8080/api/builds")).json()
}

export const GetSteps = async(buildId) => {
    return await (await fetch(`http://localhost:8080/api/builds/${buildId}/steps`)).json()
}

export const GetLogs = async(stepId) => {
    return await (await fetch(`http://localhost:8080/api/steps/${stepId}/logs`)).text()
}