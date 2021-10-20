import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { MockService } from 'ng-mocks';
import { HeroeService } from './heroe.service';
const heroesMock = [
  {
    "id": "02",
    "name": "Batman",
    "biography": "ciudad gotica",
    "image": "assets/images/batman.png",
    "appearance": "1939-05-01",
    "house": "DC"
  },
]
describe('HeroeService', () => {
  let service: HeroeService;
  let http: HttpClient;
  beforeEach(() => {
    http = MockService(HttpClient);
    service = new HeroeService();
  });

  it('should be created',() => {
    expect(service).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('should call getHeroes and pluck data from heroesMock', (done) => {
      jest.spyOn(service, 'getHeroes').mockReturnValue(of(heroesMock));
      const response = service.getHeroes();
      response.subscribe((data) => {
        expect(data).toEqual(heroesMock);  
        done();
      });
    });
  });

  describe('deleteHeroes', () => {
    const heroesMock= [ {
      "id": "01",
      "name": "Batman",
      "biography": "ciudad gotica",
      "image": "assets/images/batman.png",
      "appearance": "1939-05-01",
      "house": "DC"
    },
    {
      "id": "02",
      "name": "Aquaman",
      "biography": "El poder más reconocido",
      "image": "assets/images/aquaman.png",
      "appearance": "1941-11-01",
      "house": "DC"
    },
  ];

  const heroesMockUpdated= [ {
    "id": "01",
    "name": "Batman",
    "biography": "ciudad gotica",
    "image": "assets/images/batman.png",
    "appearance": "1939-05-01",
    "house": "DC"
  },
  {
    "id": "02",
    "name": "Aquaman",
    "biography": "El poder más reconocido",
    "image": "assets/images/aquaman.png",
    "appearance": "1941-11-01",
    "house": "DC"
  },
];
    it('should call getHeroes and pluck data from heroesMock', (done) => {
      jest.spyOn(service, 'deleteHeroe').mockReturnValue(of(heroesMockUpdated));
      const response = service.deleteHeroe('01');
      response.subscribe((data) => {
        expect(data).toEqual(heroesMockUpdated);  
        done();
      });
    });
  });
});
