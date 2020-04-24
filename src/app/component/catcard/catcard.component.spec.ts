import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatcardComponent } from './catcard.component';

describe('CatcardComponent', () => {
  let component: CatcardComponent;
  let fixture: ComponentFixture<CatcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatcardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CatcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
