const { Shop, Item } = require('../src/gildedRose');

describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  it('quality updates correctly on a normal item', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });

  it('quality degrades twice as fast when SellIn is zero on a normal item', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it('quality cannot be lower than zero', () => {
    const gildedRose = new Shop([new Item('+5 Dexterity Vest', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('AgedBrie quality goes up instead of down as quality is updated', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });

  // AgedBrie

  // Sulfuras

  // Backstage passes

  // Quality can't be higher than 50

  // Conjured items
});
// Footer;
