const { Item } = require('../src/gildedRose');
const Sulfuras = require('../src/sulfuras');

describe('sulfuras', function () {
  it("sellIn date doesn't decrease on Sulfuras", () => {
    let fakeItem = {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 10,
      quality: 20,
    };
    const sulfuras = new Sulfuras(fakeItem);
    sulfuras.updateQualitySulfuras();
    expect(sulfuras.sellIn).toBe(10);
  });
});
