export interface GameserverStatus {
    name: string,
    online: boolean,
    playersOnline: number,
    playersLimit: number,
    uptime: {
        days: number,
        hours: number,
        minutes: number,
        seconds: number
    },
    custom?: any
}