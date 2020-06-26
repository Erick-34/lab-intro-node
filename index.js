class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    if (SortedList == []) {
      throw new Error("OutOfBounds");
    } else {
      this.items.push(item);
      this.length++;
      return this.items.sort((a, b) => a - b), this.length;
    }
  }
  get(pos) {
    if (this.items.indexOf(pos) >= 0) {
      return this.items.indexOf(pos);
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  } 

  sum() {
    return this.items.reduce((acc, cv) => acc + cv, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
