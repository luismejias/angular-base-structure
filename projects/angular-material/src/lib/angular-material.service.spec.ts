
import { AngularMaterialService } from './angular-material.service';

describe('AngularMaterialService', () => {
  let service: AngularMaterialService;

  beforeEach(() => {
    service = new AngularMaterialService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
