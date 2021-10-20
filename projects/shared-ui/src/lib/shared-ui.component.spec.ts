import { SharedUiComponent } from './shared-ui.component';

describe('SharedUiComponent', () => {
  let component: SharedUiComponent;
  beforeEach(() => {
   component = new SharedUiComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
