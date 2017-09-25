import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionIndividualComponent } from './transaction-individual.component';

describe('TransactionIndividualComponent', () => {
  let component: TransactionIndividualComponent;
  let fixture: ComponentFixture<TransactionIndividualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionIndividualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
