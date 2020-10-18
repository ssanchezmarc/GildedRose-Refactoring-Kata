import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
  it('should return the same items', function() {
      const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);

      const items = gildedRose.updateQuality();

      expect(items[0].name).to.equal('foo');
  });

  it('should decrease the quality when the item has some quality', function() {
    const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(0);
  });

  it('should keep the same quality when the item is "Aged Brie" with high quality', function() {
    const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 50) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(50);
  });

  it('should decrease the quality in two when the item has some quality and it is given away', function() {
    const gildedRose = new GildedRose([ new Item('foo', -1, 2) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(0);
  });

  it('should support and empty list of items', function() {
    const gildedRose = new GildedRose();

    const items = gildedRose.updateQuality();

    expect(items.length).to.equal(0);
  });

  it('should return the same number of item that are received', function() {
    const gildedRose = new GildedRose([ new Item('foo', 1, 2), new Item('bar', 1, 2) ]);

    const items = gildedRose.updateQuality();

    expect(items.length).to.equal(2);
  });

  it('should increase in 2 the quality if the item is "Aged Brie"', function() {
    const gildedRose = new GildedRose([ new Item('Aged Brie', 0, 1) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(3);
  });

  it('should decrease the quality to 0 if the item is "Backstage passes to a TAFKAL80ETC concert"', function() {
    const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(0);
  });

  it('should increase the quality if the item is "Backstage passes to a TAFKAL80ETC concert" and is sold in more than 11', function() {
    const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 1) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(2);
  });

  it('should keep the quality quantity if the item is "Backstage passes to a TAFKAL80ETC concert" with high quality 49', function() {
    const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 1, 49) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(50);
  });

  it('should keep the same quality if the item is "Sulfuras, Hand of Ragnaros"', function() {
    const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 2) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(2);
  });

  it('should increase the quality in two when the item is "Sulfuras, Hand of Ragnaros" and it is given away', function() {
    const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', -1, 5) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.equal(5);
  });

  it('should decreaase the price when the item is not "Sulfuras, Hand of Ragnaros"', function() {
    const gildedRose = new GildedRose([ new Item('foo', 1, 2) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(0);
  });

  it('should keep the same price when the item is "Sulfuras, Hand of Ragnaros"', function() {
    const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 1, 2) ]);

    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.equal(1);
  });

});
