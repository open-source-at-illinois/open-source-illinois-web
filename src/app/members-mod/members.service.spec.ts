import { async, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { MembersService } from './members.service';
import { Member } from './member-class';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  
  //Tests for getAllMembers()
  it('getAllMembers should return an array', () => {
    const service: MembersService = TestBed.get(MembersService);
    // Call service
    service.getAllMembers()
      .subscribe(members => {      
        expect(members.length).toBe(3);
        expect(members).toEqual(expectedMembers);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/member/all');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush(expectedMembers);
  });

  //Test(s) for getMember(member: User)
  it('getMember should return a User', () => {
    const service: MembersService = TestBed.get(MembersService);
    const newUser = {
      _id: '123456789',
      email: 'myemail@myemail.com',
      firstname: 'Thomas',
      github: 'thomasdriscoll',
      lastname: 'Driscoll',
      picture: 'https://mypicture.com',
      position: null
    }
    // Call service
    
    service.getMember(newUser)
      .subscribe(workshops => {      
        expect(workshops).toEqual(newUser);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/member/name/Thomas/Driscoll');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush(newUser);
  });

  //Test(s) for getMemberByGithub(github: string)
  it('getMemberByGithub should return a User', () => {
    const service: MembersService = TestBed.get(MembersService);
    const newUser = {
      _id: '123456789',
      email: 'myemail@myemail.com',
      firstname: 'Thomas',
      github: 'thomasdriscoll',
      lastname: 'Driscoll',
      picture: 'https://mypicture.com',
      position: null
    }
    // Call service
    
    service.getMemberByGithub(newUser.github)
      .subscribe(workshops => {      
        expect(workshops).toEqual(newUser);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/member/github/'+newUser.github);
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush(newUser);
  });

  //Test(s) for getPendingMembers(pending: any)
  it('getPendingMembers should return array of User', () => {
    const service: MembersService = TestBed.get(MembersService);
    const newUser = {
      _id: '123456789',
      email: 'myemail@myemail.com',
      firstname: 'Thomas',
      github: 'thomasdriscoll',
      lastname: 'Driscoll',
      picture: 'https://mypicture.com',
      position: null
    }
    const mockParams = new HttpParams().set('pending', JSON.stringify([newUser._id]));

    // Call service    
    service.getPendingMembers([newUser._id])
      .subscribe(workshops => {      
        expect(workshops).toEqual([newUser]);
    });
    
    //Set expectations for HttpClient mock
    //Since this service uses params, must use match
    // %5B%22 === '[' %22%5D === ']'
    const req = httpTestingController.match(environment.apiUrl+'api/member/pending?pending=%5B%22123456789%22%5D');
    expect(req[0].request.method).toEqual('GET');
    expect(req[0].request.params.get('pending')).toEqual(JSON.stringify([newUser._id]));

    //Set fake data to be returned by mock
    req[0].flush([newUser]);
  });

   //Test(s) for addMember(member: Member)
   it('should post a new member in addMember', () => {
    const service: MembersService = TestBed.get(MembersService);
  
    let addResponse: Member;
    //Call service
    service.addMember(expectedMembers[0])
      .subscribe((response) => {
        addResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/member/add');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(expectedMembers[0]);

    //Set fake data to be returned by mock
    req.flush(expectedMembers[0]);

    // Response type is text as json, so easiest test method is to convert response to text
    expect(req.request.responseType).toEqual('json');
    expect(addResponse).toEqual(expectedMembers[0]);
  });
});
