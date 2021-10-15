import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    service = new DashboardService();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
