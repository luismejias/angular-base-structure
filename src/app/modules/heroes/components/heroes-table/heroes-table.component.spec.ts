import { HeroesTableComponent } from './heroes-table.component';

describe('HeroesTableComponent', () => {
  let component: HeroesTableComponent;

  beforeEach(async () => {
    component = new HeroesTableComponent();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
