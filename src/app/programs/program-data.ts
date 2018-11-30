import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Program } from './program';

export class ProgramData implements InMemoryDbService {

  createDb() {
    const programs: Program[] = [
      {
        'id': 7,
        'level1_uuid': 'f7b71ea8-8e45-4835-ac95-bd6ddbad8897',
        'name': 'Hamza',
        'programCode': 'Nrge',

      },
      {
        'id': 477,
        'level1_uuid': 'e7116323-36c6-4c93-9258-2f775ed106fc',
        'name': 'new',
        'programCode': 'NFESQ',

      },
      {
        'id': 480,
        'level1_uuid': '328957f6-7c43-49c5-8dae-6e368495089b',
        'name': 'new',
        'programCode': 'VKSD',

      },
      {
        'id': 472,
        'level1_uuid': '1ee6faee-63a0-453f-b33d-94be19672fa4',
        'name': 'NGF',
        'programCode': 'FEW',

      },
      {
        'id': 471,
        'level1_uuid': '63dd6c6b-f1b7-49c3-a05a-e2160c5cb8bc',
        'name': 'PRG',
        'programCode': 'FEFEQ'

      },
      {
        'id': 483,
        'level1_uuid': '1fda5c50-bdd1-431a-ab9d-dcf51a8b7de8',
        'name': 'wergew',
        'programCode': 'NEGB',

      }
    ];
    return { programs };
  }
}
