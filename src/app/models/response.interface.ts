export interface IResponse {
    codigoRetorno: string;
    mensajeRetorno: string;
    usuario: {nombre:string, plan:number};
    token: string;  
}