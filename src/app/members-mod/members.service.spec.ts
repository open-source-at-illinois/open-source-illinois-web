import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { MembersService } from './members.service';

describe('MembersService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularMaterialsModModule
      ],
      declarations: []
    })
  }));

  it('should be created', () => {
    const service: MembersService = TestBed.get(MembersService);
    expect(service).toBeTruthy();
  });
});
