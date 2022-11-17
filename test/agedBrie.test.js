const { Item } = require('../src/gildedRose');
const AgedBrie = require('../src/agedBrie');

describe('AgedBrie', function () {
  it('quality increases by one when updated', () => {
    let fakeItem = {
      name: 'AgedBrie',
      sellIn: 2,
      quality: 0,
    };
    const agedBrie = new AgedBrie(fakeItem);
    agedBrie.updateQualityAgedBrie();
    expect(agedBrie.quality).toBe(1);
  });
});
