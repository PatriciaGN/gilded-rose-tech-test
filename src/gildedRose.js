const AgedBrie = require('../src/agedBrie');

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie') {
        let agedBrie = new AgedBrie(this.items[i]);
        agedBrie.updateQualityAgedBrie();
        this.items[i].sellIn = agedBrie.itemSellIn();
        this.items[i].quality = agedBrie.itemQuality();
      }
      // ('Sulfuras, Hand of Ragnaros');
      // ('Backstage passes to a TAFKAL80ETC concert');
      // ('conjured');
      return this.items;
    }
  }
}

module.exports = {
  Item,
  Shop,
};
