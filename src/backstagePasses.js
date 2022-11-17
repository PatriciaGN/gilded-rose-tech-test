const { Item } = require('../src/gildedRose');

class BackstagePasses {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityBackstagePasses() {
    this.quality += 1;
  }
}

module.exports = BackstagePasses;
