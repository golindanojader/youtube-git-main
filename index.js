import {extract} from '@extractus/article-extractor'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0; //desabilitar el certificado https
let web = await extract('https://www.bcv.org.ve/')  
const titulo = "tasa BCV: "
var output = JSON.stringify(web)
console.log(titulo + output.slice(1783,1789))