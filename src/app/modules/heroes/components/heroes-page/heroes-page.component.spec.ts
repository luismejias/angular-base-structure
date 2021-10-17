import { FormBuilder } from '@angular/forms';
import { HeroesPageComponent } from './heroes-page.component';
import { MockService } from 'ng-mocks';
import { HeroeService } from '../../services/heroe.service';
import { of } from 'rxjs';
const heroesMock = [
  {
    id: "06",
    name: "Spider-Man",
    biography: "Tras ser mordido por una araña radiactiva...",
    image: "assets/images/spiderman.png",
    appearance: "1962-08-01",
    house: "Marvel"
  },
]
describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let formBuilder: FormBuilder;
  let heroeService: HeroeService;
  beforeEach(() => {
    formBuilder = MockService(FormBuilder);
    heroeService = MockService(HeroeService);
    component = new HeroesPageComponent(formBuilder, heroeService);

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getHeroes', () => {
    it('should call getHeroes', () => {
      const spy = jest.spyOn(heroeService, 'getHeroes').mockReturnValue(of(heroesMock))
      component.getHeroes();
      expect(spy).toHaveBeenCalled();
    });

    it('should call getHeroes and pluck data from heroesMock', (done) => {
      jest.spyOn(heroeService, 'getHeroes').mockReturnValue(of(heroesMock));
      const response = heroeService.getHeroes();
      response.subscribe((data) => {
        expect(data).toBe(heroesMock);
        done();
      });
    });
  });
});
