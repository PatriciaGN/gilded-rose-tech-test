const Sulfuras = require('../src/sulfuras');

describe('Sulfuras', function () {
  it("doesn't decrease sellIn date when updated", () => {
    let fakeItem = {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 10,
      quality: 20,
    };
    const sulfuras = new Sulfuras(fakeItem);
    sulfuras.updateQualitySulfuras();
    expect(sulfuras.sellIn).toBe(10);
  });

  it("doesn't change quality when updated", () => {
    let fakeItem = {
      name: 'Sulfuras, Hand of Ragnaros',
      sellIn: 10,
      quality: 20,
    };
    const sulfuras = new Sulfuras(fakeItem);
    sulfuras.updateQualitySulfuras();
    expect(sulfuras.quality).toBe(20);
  });
});
