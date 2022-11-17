class ConjuredItem {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityConjuredItem() {
    if (!this.quality < 1) {
      this.quality -= 2;
    }
  }

  itemSellIn() {
    return this.sellIn;
  }

  itemQuality() {
    return this.quality;
  }
}

module.exports = ConjuredItem;
