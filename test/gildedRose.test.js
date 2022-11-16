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
});
// Footer;
