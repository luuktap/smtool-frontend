export interface ServiceStatus {
    name: string,
    status: number,
    uptime: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    },
    custom?: any
}