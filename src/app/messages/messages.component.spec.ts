import { NO_ERRORS_SCHEMA } from "@angular/core";
import { MessagesComponent } from "./messages.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("MessagesComponent", () => {

  let fixture: ComponentFixture<MessagesComponent>;
  let component: MessagesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [MessagesComponent]
    });

    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
