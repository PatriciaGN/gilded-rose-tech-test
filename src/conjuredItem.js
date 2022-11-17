class ConjuredItem {
  constructor(item) {
    this.sellIn = item.sellIn;
    this.quality = item.quality;
  }
  updateQualityConjuredItem() {
    this.quality -= 2;
  }
}

module.exports = ConjuredItem;
