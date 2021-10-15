import { SharedUiService } from './shared-ui.service';

describe('SharedUiService', () => {
  let service: SharedUiService;

  beforeEach(() => {
    service = new SharedUiService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
