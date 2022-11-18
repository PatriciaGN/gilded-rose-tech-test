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

  it("doesn't change quality once it reaches 0", () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 0,
      quality: 20,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(0);
  });

  it('has a maximum quality of 50', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 10,
      quality: 50,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    backstagePasses.updateQualityBackstagePasses();
    backstagePasses.updateQualityBackstagePasses();
    expect(backstagePasses.quality).toBe(50);
  });

  it('returns sellIn and quality', () => {
    let fakeItem = {
      name: 'Backstage passes to a TAFKAL80ETC concert',
      sellIn: 3,
      quality: 0,
    };
    const backstagePasses = new BackstagePasses(fakeItem);
    expect(backstagePasses.itemSellIn()).toBe(3);
    expect(backstagePasses.itemQuality()).toBe(0);
  });
});
