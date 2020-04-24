import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatfactComponent } from './catfact.component';

describe('CatfactComponent', () => {
  let component: CatfactComponent;
  let fixture: ComponentFixture<CatfactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatfactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
