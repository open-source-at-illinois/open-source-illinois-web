import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from "../../../../node_modules/rxjs";
import { Member } from '../member-class';
import { MembersService } from '../members.service';
import { MembersComponent } from './members.component';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

const membersServiceStub = {
  getAllMembers() {
    return of([{
      firstname : 'Thomas',
      lastname: 'Driscoll',
      password: 'fake',
      email: 'fake@fake.com',
      github: 'fakegithub'
    }])
  }
}
describe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularMaterialsModModule,
        HttpClientTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ 
        MembersComponent
      ],
      providers: [{provide: MembersService, useValue:membersServiceStub}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should return get all', async() => {

  //   let membersService = jasmine.createSpyObj('MemberService', ['getAllMembers']);
  //   membersService.getAllMembers
  //     .subscribe(members => {
        
  //     })
  //   // let members = membersService.getAllMembers();
  //   expect(component.members).toBe(membersServiceStub.getAllMembers());

  // });
});
