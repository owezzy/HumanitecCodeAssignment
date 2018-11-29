import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Activity } from './activity';

export class ActivityData implements InMemoryDbService {

  createDb() {
    const activities: Activity[] = [
      {
        'id': 497,
        'name': '2',
        'create_date': '2018-11-21T15:26:48.811678+01:00',
        'end_date': '2018-11-21T17:06:03.332852+01:00',
        },
      {
        'id': 500,
        'name': '5',
        'create_date': '2018-11-21T15:46:01.975170+01:00',
        'end_date': '2018-11-21T16:28:46.227588+01:00',
      },
      {
        'id': 501,
        'name': '8',
        'create_date': '2018-11-21T15:49:06.368654+01:00',
        'end_date': '2018-11-21T17:39:29.126479+01:00',
      },
      {
        'id': 399,
        'name': 'Another Sample WKL2',
        'create_date': '2018-11-12T09:43:08.571369+01:00',
        'end_date': '2018-11-23T13:41:19.272446+01:00',
      },
      {
        'id': 495,
        'name': 'test 2',
        'create_date': '2018-11-21T11:52:52.809698+01:00',
        'end_date': '2018-11-21T11:52:52.809708+01:00',
      },
      {
        'id': 428,
        'name': 'Test with Kinoti 3',
        'create_date': '2018-11-12T15:52:58.877690+01:00',
        'end_date': '2018-11-21T17:06:08.641378+01:00',
        }
    ];
    return { activities };
  }
}


