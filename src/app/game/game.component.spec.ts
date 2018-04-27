import { NO_ERRORS_SCHEMA } from "@angular/core";
import { GameComponent } from "./game.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("GameComponent", () => {

  let fixture: ComponentFixture<GameComponent>;
  let component: GameComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [GameComponent]
    });

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
