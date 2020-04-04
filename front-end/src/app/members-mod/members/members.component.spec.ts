import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from "../../../../node_modules/rxjs";
import { Member } from '../member-class';
import { MembersService } from '../members.service';
import { MembersComponent } from './members.component';
import { AngularMaterialsModModule } from 'src/app/angular-materials-mod/angular-materials-mod.module';

const membersServiceStub = {
  getAllMembers() {
    return of()
  }
}
fdescribe('MembersComponent', () => {
  let component: MembersComponent;
  let fixture: ComponentFixture<MembersComponent>;
  //Create a fake MembersService object
  const service = jasmine.createSpyObj('MembersService', ['getAllMembers']);
  var getAllMembersSpy = service.getAllMembers.and.returnValue(of(
    [new Member(
      '123',
      'Thomas',
      'thomasdriscoll',
      'Driscoll',
      'https://mypicture.com'
    )]
  ));
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
      providers: [{provide: MembersService, useValue:service}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set members to return value of getAllMembers', async() => {
    fixture.detectChanges();
    expect(component.members).toEqual(
      [new Member(
        '123',
        'Thomas',
        'thomasdriscoll',
        'Driscoll',
        'https://mypicture.com'
      )]
    );
  });
});
