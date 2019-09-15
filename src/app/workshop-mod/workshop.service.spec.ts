import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { WorkshopService } from './workshop.service';
import { Workshop } from './workshop-class';
import { User } from '../user-mod/user-class';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


describe('WorkshopService', () => {
  //Mock Data
  const mockWorkshops = [
    new Workshop(
      'Mock Workshop 1',
      'this is a mock workshop',
      new Date(8/18/1998),
      'Siebel 1790',
      'active',
      'web development',
      new User(
        'thomasdriscoll98@gmail.com',
        'Thomas',
        'thomasdriscoll',
        'Driscoll',
        'https://mypicture.com',
        'Web Director'
      )
    ),
    new Workshop(
      'Mock Workshop 2',
      'this is a mock workshop',
      new Date(8/18/2019),
      'Siebel 1790',
      'active',
      'web development',
      new User(
        'evan@gmail.com',
        'Evan',
        'thomasdriscoll',
        'LeClerq',
        'https://mypicture.com',
        'President'
      )
    ),
    new Workshop(
      'Mock Workshop 2',
      'this is a mock workshop',
      new Date(8/18/2019),
      'Siebel 1790',
      'active',
      'web development',
      new User(
        'evan@gmail.com',
        'Evan',
        'thomasdriscoll',
        'LeClerq',
        'https://mypicture.com',
        'President'
      )
    )
  ];
  //Declare spy object as a global variable
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        AngularMaterialsModModule
      ],
      providers: [WorkshopService]
    })
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
     
  }));

  //afterEach runs steps after each it statement
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    expect(service).toBeTruthy();
  });

   //Tests for getAllWorkshops()
   it('should return array on getAllWorkshops', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    // Call service
    service.getAllWorkshops()
      .subscribe(workshops => {      
        expect(workshops.length).toBe(3);
        expect(workshops).toEqual(mockWorkshops);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/all');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush(mockWorkshops);
  });

  //Tests for getWorkshopByUser(position: string)
  it('should return array on getSuggestedWorkshops', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    //Call service
    service.getSuggestedWorkshops('President')
      .subscribe(workshops => {
        expect(workshops.length).toBe(2);
        expect(workshops).toEqual([mockWorkshops[1], mockWorkshops[2]])
    });

    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/suggested/President');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush([mockWorkshops[1], mockWorkshops[2]]);      
  });

  //Test(s) for getWorkshopByUser(userId: string)
  it('should return array on getWorkshopByUser', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    //Add defined value for id in mockUser
    mockWorkshops[0].presenter._id = '1234567890';
    //Call service
    service.getWorkshopByUser('1234567890')
      .subscribe(workshops => {
        expect(workshops.length).toBe(1);
        expect(workshops).toEqual([mockWorkshops[0]])
    });

    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/byUser/1234567890');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush([mockWorkshops[0]]);
  });

  //Test(s) for createWorkshop(workshop: Workshop)
  it('should post a new Workshop on createWorkshop', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    const newWorkshop = {
      "_id": "123456789",
      "title": 'New Workshop',
      "description": 'My new workshop',
      "date": new Date('2019-08-02T05:00:00.000Z'),
      "location": 'Siebel Center 1790',
      "status": 'suggested',
      "category": 'web development',
      "presenter":
      {
        "_id": "123",
        "email": 'evan@gmail.com',
        "firstname": 'Thomas',
        "github": 'thomasdriscoll',
        "lastname": 'Driscoll',
        "picture": 'https://mypicture.com',
        "position": 'President'
      },
      "attending" : []
    };
    let createResponse: any;
    //Call service
    service.createWorkshop(newWorkshop)
      .subscribe((response) => {
        createResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/add');
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newWorkshop);

    //Set fake data to be returned by mock
    req.flush(newWorkshop);

    // Response type is text as json, so easiest test method is to convert response to text
    expect(req.request.responseType).toEqual('text');
    expect(createResponse).toEqual(JSON.stringify(newWorkshop));
  });

  //Test(s) for statusWorkshop(workshop: Workshop)
  it('should post a new Workshop on statusWorkshop', () => {
    const service: WorkshopService = TestBed.get(WorkshopService);
    const newWorkshop = {
      "_id": "123456789",
      "title": 'New Workshop',
      "description": 'My new workshop',
      "date": new Date('2019-08-02T05:00:00.000Z'),
      "location": 'Siebel Center 1790',
      "status": 'active',
      "category": 'web development',
      "presenter":
      {
        "_id": "123",
        "email": 'evan@gmail.com',
        "firstname": 'Thomas',
        "github": 'thomasdriscoll',
        "lastname": 'Driscoll',
        "picture": 'https://mypicture.com',
        "position": 'President'
      },
      "attending" : []
    };
    let createResponse: any;
    //Call service
    service.statusWorkshop(newWorkshop)
      .subscribe((response) => {
        createResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/updateStatus');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(newWorkshop);

    //Set fake data to be returned by mock
    req.flush(newWorkshop);

    // Response type is text as json, so easiest test method is to convert response to text
    expect(req.request.responseType).toEqual('text');
    expect(createResponse).toEqual(JSON.stringify(newWorkshop));
  });

    //Test(s) for addAttendee(userId: string, workshopId: string)
    it('should put a new member in workshop on addAttendee', () => {
      const service: WorkshopService = TestBed.get(WorkshopService);
      const newWorkshop = {
        "_id": "123456789",
        "title": 'New Workshop',
        "description": 'My new workshop',
        "date": new Date('2019-08-02T05:00:00.000Z'),
        "location": 'Siebel Center 1790',
        "status": 'suggested',
        "category": 'web development',
        "presenter":
        {
          "_id": "123",
          "email": 'evan@gmail.com',
          "firstname": 'Thomas',
          "github": 'thomasdriscoll',
          "lastname": 'Driscoll',
          "picture": 'https://mypicture.com',
          "position": 'President'
        },
        "attending" : []
      };
      let createResponse: any;
      //Call service
      service.addAttendee(newWorkshop.presenter._id, newWorkshop._id)
        .subscribe((response) => {
          createResponse = response;
        }
      );
      
      //Set expectations for HttpClient mock
      const req = httpTestingController.expectOne(environment.apiUrl+'api/workshop/addAttendee');
      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual([newWorkshop.presenter._id, newWorkshop._id]);
  
      //Set fake data to be returned by mock
      req.flush(newWorkshop);
  
      // Response type is text as json, so easiest test method is to convert response to text
      expect(req.request.responseType).toEqual('text');
      expect(createResponse).toEqual(JSON.stringify(newWorkshop));
    });
});
