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

  it('quality can\t be higher than 50', () => {
    const gildedRose = new Shop([new Item('Aged Brie', 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it("Sulfuras doesn't decrease in quality when SellIn is over zero", () => {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', 2, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });

  it("Sulfuras doesn't decrease in quality when SellIn is under zero", () => {
    const gildedRose = new Shop([
      new Item('Sulfuras, Hand of Ragnaros', -2, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(20);
  });

  it('Backstage passes increase quality as SellIn value lowers', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it('Backstage passes increase quality twice as fast when SellIn value is equal or lower to 10', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);

    gildedRose.updateQuality();
    expect(items[0].quality).toBe(24);
  });

  it('Backstage passes increase quality three times as fast when SellIn value is equal or lower to 5', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);

    gildedRose.updateQuality();
    expect(items[0].quality).toBe(26);
  });

  it('quality turns zero on Backstage passes after the SellIn reaches 0', () => {
    const gildedRose = new Shop([
      new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('quality on conjured items decreases twice as fast', () => {
    const gildedRose = new Shop([new Item('Conjured Mana Cake', 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });
});
// Footer;
