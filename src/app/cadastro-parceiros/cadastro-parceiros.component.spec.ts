import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroParceirosComponent } from './cadastro-parceiros.component';

describe('CadastroParceirosComponent', () => {
  let component: CadastroParceirosComponent;
  let fixture: ComponentFixture<CadastroParceirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroParceirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroParceirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
