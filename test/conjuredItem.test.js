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

  it('degrades quality four times as fast when sellIn is lower than one', () => {
    let fakeItem = {
      name: 'Conjured Mana Cake',
      sellIn: 0,
      quality: 6,
    };
    const conjuredItem = new ConjuredItem(fakeItem);
    conjuredItem.updateQualityConjuredItem();
    expect(conjuredItem.quality).toBe(2);
  });

  it('cannot degrade quality further than zero', () => {
    let fakeItem = {
      name: 'Conjured Mana Cake',
      sellIn: 3,
      quality: 0,
    };
    const conjuredItem = new ConjuredItem(fakeItem);
    conjuredItem.updateQualityConjuredItem();
    conjuredItem.updateQualityConjuredItem();
    expect(conjuredItem.quality).toBe(0);
  });

  it('returns sellIn and quality', () => {
    let fakeItem = {
      name: 'Conjured Mana Cake',
      sellIn: 3,
      quality: 0,
    };
    const conjuredItem = new ConjuredItem(fakeItem);
    expect(conjuredItem.itemSellIn()).toBe(3);
    expect(conjuredItem.itemQuality()).toBe(0);
  });
});
