import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatfactsPage } from './catfacts.page';

describe('CatfactsPage', () => {
  let component: CatfactsPage;
  let fixture: ComponentFixture<CatfactsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatfactsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatfactsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
