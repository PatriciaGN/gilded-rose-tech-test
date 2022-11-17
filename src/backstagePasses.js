const { Item } = require('../src/gildedRose');

class BackstagePasses {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityBackstagePasses() {
    if (this.sellIn < 6) {
      this.quality += 2;
    } else if (this.sellIn < 11) {
      this.quality += 1;
    }
    this.quality += 1;
  }
}

module.exports = BackstagePasses;
