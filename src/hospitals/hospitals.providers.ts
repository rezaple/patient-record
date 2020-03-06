import { Hospital } from './hospital.entity';

export const hospitalsProviders = [{ provide: 'HospitalsRepository', useValue: Hospital }];
