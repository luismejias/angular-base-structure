import { FormBuilder, FormGroup } from '@angular/forms';
import { HeroesPageComponent } from './heroes-page.component';
import { MockService } from 'ng-mocks';
import { HeroeService } from '../../services/heroe.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
const heroesMock = [
  {
    id: "06",
    name: "Spider-Man",
    biography: "Tras ser mordido por una araña radiactiva...",
    image: "assets/images/spiderman.png",
    appearance: "1962-08-01",
    house: "Marvel"
  },
];

describe('HeroesPageComponent', () => {
  let component: HeroesPageComponent;
  let formBuilder = new FormBuilder();
  let dialog: MatDialog;
  let heroeService: HeroeService;
  let matSnackBar: MatSnackBar
  beforeEach(() => {
    heroeService = MockService(HeroeService);
    dialog = MockService(MatDialog);
    matSnackBar = MockService(MatSnackBar);
    component = new HeroesPageComponent(formBuilder, heroeService, dialog, matSnackBar);

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
