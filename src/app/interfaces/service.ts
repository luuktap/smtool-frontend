export interface Service {
    id: number;
    name: string;
    status: number;
    uptime: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
    custom?: any;
}