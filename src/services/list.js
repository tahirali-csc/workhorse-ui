export default class EmpList {
    constructor(){

    }

    GetData(){
        return new Promise((res, rej)=>{
            setTimeout(()=> res("Test Servce World"), 200)
        })
    }
}