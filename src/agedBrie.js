const { Item } = require('../src/gildedRose');

class AgedBrie {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityAgedBrie() {
    this.quality += 1;
    this.sellIn = 1;
  }
}

module.exports = AgedBrie;
