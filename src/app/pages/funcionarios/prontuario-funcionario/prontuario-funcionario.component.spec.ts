import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProntuarioFuncionarioComponent } from './prontuario-funcionario.component';

describe('ProntuarioFuncionarioComponent', () => {
  let component: ProntuarioFuncionarioComponent;
  let fixture: ComponentFixture<ProntuarioFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProntuarioFuncionarioComponent]
    });
    fixture = TestBed.createComponent(ProntuarioFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
