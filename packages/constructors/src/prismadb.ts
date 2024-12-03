import { IResult } from "@repo/types/database.js"

export class ReturnJson {
    public statusCode: number;
    public success: boolean;
    public message: string;
    public data: any;

    constructor(statusCode: number, success: boolean, message: string, data: any) {
        this.statusCode = statusCode;
        this.success = success;
        this.message = message;
        this.data = data
    }

    printReturnJson() {
        console.log({
            statusCode: this.statusCode,
            success: this.success,
            message: this.message,
            data: this.data
        })
    }
}