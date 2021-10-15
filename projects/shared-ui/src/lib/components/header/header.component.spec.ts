
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach( () => {
    component = new HeaderComponent();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('plus', () => {
    const result = component.plus(1, 2);
    expect(result).toEqual(3);
  });
});
