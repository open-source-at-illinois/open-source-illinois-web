import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { MembersService } from './members.service';
import { Member } from './member-class';
import { HttpClient } from 'selenium-webdriver/http';

describe('MembersService', () => {
  //Declare spy object as a global variable
  // let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  //Mock data
  let expectedMembers : Member[] = [
    new Member(
      'thomasdriscoll98@gmail.com',
      'Thomas',
      'thomasdriscoll',
      'Driscoll',
      'https://mypicture.com'
    ),
    new Member(
      'brianwilens@gmail.com',
      'Brian',
      'wertydoo',
      'Wilens',
      'https://Brianpicture.com'
    ),
    new Member(
      'evanl@gmail.com',
      'Evan',
      'mrprez',
      'LeClerq',
      'https://Evanpicture.com'
    )
  ];

  //beforeEach configures TestBed before every it statement
  beforeEach(async(() => {
    //Import modules necessary to make service work
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularMaterialsModModule
      ],
      providers: [MembersService],
    });
    // Inject the http service and test controller for each test
    // httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  }));

  //afterEach runs steps after each it statement
  afterEach(() => {
    httpTestingController.verify();
  })

  //Test works when using Chromium -- breaks when using Chromium headless
  //This is because of 'window.location.origin' needing to specified
  it('should be created', () => {
    const service: MembersService = TestBed.get(MembersService);
    expect(service).toBeTruthy();
  });
  
  // it('getAllMembers should return an array', () => {
  //   const service: MembersService = TestBed.get(MembersService);
  //   httpClient.get<Data>('http://localhost:3000/api/member/all')

  //   service.getAllMembers().subscribe(
  //     members => expect(members).toEqual(expectedMembers, 'expected members'),
  //     fail
  //   );


  // })
});
