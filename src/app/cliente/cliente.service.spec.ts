/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ClienteService } from './cliente.service';

describe('Service: Cliente', () => {
  beforeEach(() => {
    addProviders([ClienteService]);
  });

  it('should ...',
    inject([ClienteService],
      (service: ClienteService) => {
        expect(service).toBeTruthy();
      }));
});
