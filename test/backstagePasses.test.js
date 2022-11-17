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

  it('increases quality twice as fast when sellIn is under eleven days', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 10,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(22);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(24);
  });

  it('increases quality three times as fast when sellIn is under six days', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 5,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(23);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(26);
  });

  it('decreases quality to zero when SellIn date reaches zero', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 0,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(0);
  });

  // No further increase if over 50
});
