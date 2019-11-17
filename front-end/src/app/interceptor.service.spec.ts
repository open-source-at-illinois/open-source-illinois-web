import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { InterceptorService } from './interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });

  // BIG OOF -- I copied the code for this from Auth0 and they don't have great documentation describing how to test

});
