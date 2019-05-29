export interface ServiceStatus {
    name: string,
    online: boolean,
    uptime: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    },
    custom?: any
}