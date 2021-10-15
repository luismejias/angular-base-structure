
import { DashboardStateService } from './dashboard-state.service';

describe('DashboardStateService', () => {
  let service: DashboardStateService;

  beforeEach(() => {
    service = new DashboardStateService();
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
