import { Patient } from './patient.entity';

export const patientsProviders = [{ provide: 'PatientsRepository', useValue: Patient }];
