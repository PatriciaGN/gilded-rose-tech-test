class Sulfuras {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualitySulfuras() {
    return;
  }

  itemSellIn() {
    return this.sellIn;
  }

  itemQuality() {
    return this.quality;
  }
}

module.exports = Sulfuras;
