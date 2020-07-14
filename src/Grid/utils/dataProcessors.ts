import { format } from 'date-fns';

const ONE_THOUSAND = 1000;

const fullTime = (date?: unknown): string => {
  if (typeof date === 'number') return format(new Date(date * ONE_THOUSAND), 'dd.MM.yyyy HH:mm:ss');
  if (typeof date === 'string') return format(new Date(date), 'dd.MM.yyyy HH:mm:ss');
  return '';
};

export { fullTime };
