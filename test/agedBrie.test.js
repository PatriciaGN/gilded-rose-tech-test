const { Item } = require('../src/gildedRose');
const AgedBrie = require('../src/agedBrie');

describe('AgedBrie', function () {
  it('increases quality by one when updated once', () => {
    let fakeItem = {
      name: 'AgedBrie',
      sellIn: 2,
      quality: 0,
    };
    const agedBrie = new AgedBrie(fakeItem);
    agedBrie.updateQualityAgedBrie();
    expect(agedBrie.quality).toBe(1);
  });

  it('increases quality by one every time it is updated', () => {
    let fakeItem = {
      name: 'AgedBrie',
      sellIn: 2,
      quality: 0,
    };
    const agedBrie = new AgedBrie(fakeItem);
    agedBrie.updateQualityAgedBrie();
    agedBrie.updateQualityAgedBrie();
    expect(agedBrie.quality).toBe(2);
  });

  it('decreases sellIn by one every time quality is updated', () => {
    let fakeItem = {
      name: 'AgedBrie',
      sellIn: 2,
      quality: 0,
    };
    const agedBrie = new AgedBrie(fakeItem);
    agedBrie.updateQualityAgedBrie();
    expect(agedBrie.sellIn).toBe(1);
  });

  // Quality can't go higher than 50
});
