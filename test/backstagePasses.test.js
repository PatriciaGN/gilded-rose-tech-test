const { Item } = require('../src/gildedRose');
const BackstagePasses = require('../src/backstagePasses');

describe('BackstagePasses', function () {
  it('increases quality when updated', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 15,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(21);
  });

  it('increases quality when updated several times', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 15,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(22);
  });

  // No further increase if over 50
});
