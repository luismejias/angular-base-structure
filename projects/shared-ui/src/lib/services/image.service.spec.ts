import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
