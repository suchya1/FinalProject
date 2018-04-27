import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AppComponent", () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
