import {Session} from "../model/Session";
import {NOT_CONNECTED_ERROR} from "../config/app.constants";
import {IGuard} from "./IGuard";

export class AuthGuard implements IGuard{

    public transform (session:Session, req:any, res:any):boolean{
        return session.isConnected();
    }

    public getErrorCode():any{
        return NOT_CONNECTED_ERROR;
    }

}