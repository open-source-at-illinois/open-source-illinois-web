import { async, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

import { ProjectService } from './project.service';
import { HttpClient } from '@angular/common/http';
import { Project } from './project-class';
import { environment } from 'src/environments/environment';

describe('ProjectService', () => {
   //Mock data
   const mockProjects = [
    new Project(
      '123',
      'MockProject1',
      'A mock project lolz',
      'Siebel 1790',
      'Fridays at 7:00PM',
      'active',
      'mockproject1',
      'web development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789'],
      ['345', '678']
    ), new Project(
      '456',
      'MockProject2',
      'A mock project lolz',
      'Siebel 1790',
      'Mondays at 7:00PM',
      'active',
      'mockproject2',
      'mobile development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789'],
      ['345', '678']
    ), new Project(
      '789',
      'MockProject3',
      'A mock project lolz',
      'Siebel 1790',
      'Mondays at 7:00PM',
      'suggested',
      'mockproject3',
      'desktop development',
      'https://mypicture.com',
      'Brian Wilens',
      '123456789',
      ['123', '456', '789'],
      ['345', '678']
    )];
  //Declare spy object as a global variable
  let httpTestingController: HttpTestingController;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        AngularMaterialsModModule
      ],
      providers: [ProjectService]
    });
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
 
  }));

  //afterEach runs steps after each it statement
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });

  //Tests for getAllProjects()
  it('should return array on getAllProjects', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    // Call service
    service.getAllProjects()
      .subscribe(projects => {      
        expect(projects.length).toBe(3);
        expect(projects).toEqual(mockProjects);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/all');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush(mockProjects);
  });

  //Tests for getProjectByUser(userId: string)
  it('should return array on getProjectByUser', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    // Call service
    service.getProjectByUser(mockProjects[0].leaderId)
      .subscribe(projects => {      
        expect(projects.length).toBe(2);
        expect(projects).toEqual([mockProjects[0], mockProjects[1]]);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/byUser/'+mockProjects[0].leaderId);
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush([mockProjects[0], mockProjects[1]]);
  });

  //Tests for getSuggestedProjects(position: string)
  it('should return array on getSuggestedProjects', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    // Call service
    service.getSuggestedProjects('President')
      .subscribe(projects => {      
        expect(projects.length).toBe(1);
        expect(projects).toEqual([mockProjects[2]]);
    });
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/suggested/President');
    expect(req.request.method).toEqual('GET');

    //Set fake data to be returned by mock
    req.flush([mockProjects[2]]);
  });

  //Tests for addProjectMember(userId: string, projectId: string)
  it('should have addProjectMember make proper PUT call', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const form = new Project(
      '123',
      'MockProject1',
      'A mock project lolz',
      'Siebel 1790',
      'Fridays at 7:00PM',
      'active',
      'mockproject1',
      'web development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789'],
      ['345', '678']
    );
    let addResponse: any;
    // Call service
    service.addProjectMember('123456', mockProjects[0]._id)
      .subscribe((response) => {      
        addResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/addProjectMember');
    expect(req.request.method).toEqual('PUT');
    expect(JSON.stringify(req.request.body)).toEqual(JSON.stringify(["123456", "123"]));

    //Set fake data to be returned by mock
    req.flush(form);

    // Response type is text as json, which JSON.parses the text received
    expect(req.request.responseType).toEqual('text');
    var temp = JSON.parse(addResponse);
    var realResponse = Object.assign(new Project('','','','','','','','','','','',[],[]), temp);
    expect(realResponse).toEqual(form);
  });

  //Tests for approveProjectMember(userId, projectId)
  it('should have approveProjectMember make proper PUT call', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const form = new Project(
      '123',
      'MockProject1',
      'A mock project lolz',
      'Siebel 1790',
      'Fridays at 7:00PM',
      'active',
      'mockproject1',
      'web development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789', '345'],
      [ '678']
    );
    let statusResponse: any;
    // Call service
    service.statusProject(form)
      .subscribe((response) => {      
        statusResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/updateStatus');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(form);

    //Set fake data to be returned by mock
    req.flush(form);

    // Response type is text as json, which JSON.parses the text received
    expect(req.request.responseType).toEqual('text');
    var temp = JSON.parse(statusResponse);
    var realResponse = Object.assign(new Project('','','','','','','','','','','',[],[]), temp);
    expect(realResponse).toEqual(form);
  });

  //Tests for approveProjectMember(userId, projectId)
  it('should have approveProjectMember make proper PUT call', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const form = new Project(
      '123',
      'MockProject1',
      'A mock project lolz',
      'Siebel 1790',
      'Fridays at 7:00PM',
      'active',
      'mockproject1',
      'web development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789', '345'],
      [ '678']
    );
    let addResponse: any;
    // Call service
    service.approveProjectMember('345', mockProjects[0]._id)
      .subscribe((response) => {      
        addResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/approveProjectMember');
    expect(req.request.method).toEqual('PUT');
    expect(JSON.stringify(req.request.body)).toEqual(JSON.stringify(["345", "123"]));

    //Set fake data to be returned by mock
    req.flush(form);

    // Response type is text as json, which JSON.parses the text received
    expect(req.request.responseType).toEqual('text');
    var temp = JSON.parse(addResponse);
    var realResponse = Object.assign(new Project('','','','','','','','','','','',[],[]), temp);
    expect(realResponse).toEqual(form);
  });

  //Tests for approveProjectMember(userId, projectId)
  it('should have rejectProjectMember make proper PUT call', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    const form = new Project(
      '123',
      'MockProject1',
      'A mock project lolz',
      'Siebel 1790',
      'Fridays at 7:00PM',
      'active',
      'mockproject1',
      'web development',
      'https://mypicture.com',
      'Thomas Driscoll',
      '123456789',
      ['123', '456', '789', '345'],
      []
    );
    let rejectResponse: any;
    // Call service
    service.rejectProjectMember('678', mockProjects[0]._id)
      .subscribe((response) => {      
        rejectResponse = response;
      }
    );
    
    //Set expectations for HttpClient mock
    const req = httpTestingController.expectOne(environment.apiUrl+'api/project/rejectProjectMember/123/678');
    expect(req.request.method).toEqual('DELETE');
    expect(req.request.body).toEqual(null);

    //Set fake data to be returned by mock
    req.flush(form);

    // Response type is text as json, which JSON.parses the text received
    expect(req.request.responseType).toEqual('text');
    var temp = JSON.parse(rejectResponse);
    var realResponse = Object.assign(new Project('','','','','','','','','','','',[],[]), temp);
    expect(realResponse).toEqual(form);
  });
});
