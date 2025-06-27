import { formatInTimeZone } from 'date-fns-tz';

export const getDateCR = () =>formatInTimeZone(new Date(), 'America/Costa_Rica', 'yyyy-MM-dd HH:mm:ss');