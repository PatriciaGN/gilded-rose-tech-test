const ConjuredItem = require('../src/conjuredItem');

describe('ConjuredItem', function () {
  it('degrades quality twice as fast', () => {
    let fakeItem = {
      name: 'Conjured Mana Cake',
      sellIn: 3,
      quality: 6,
    };
    const conjuredItem = new ConjuredItem(fakeItem);
    conjuredItem.updateQualityConjuredItem();
    expect(conjuredItem.quality).toBe(4);
  });

  it('degrades quality twice as fast with several quality updates', () => {
    let fakeItem = {
      name: 'Conjured Mana Cake',
      sellIn: 3,
      quality: 6,
    };
    const conjuredItem = new ConjuredItem(fakeItem);
    conjuredItem.updateQualityConjuredItem();
    conjuredItem.updateQualityConjuredItem();
    expect(conjuredItem.quality).toBe(2);
  });
});
