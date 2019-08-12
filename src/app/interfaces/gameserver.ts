export interface GameServer {
    id: number;
    name: string;
    status: number;
    playersOnline: number;
    playersLimit: number;
    uptime: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    custom?: any;
}