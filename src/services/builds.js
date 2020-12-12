export const GetBuilds = async () => {
    return await (await fetch("http://localhost:8080/api/builds")).json()
}