const PrismaSingleton = require("../../src/prismaSingleton");
const prisma = PrismaSingleton.getInstance();

class Artist {
    constructor(firstName, birthDate) {
      this.firstName = firstName;
      this.birthDate = birthDate;
    }
}
class Artwork {
    constructor(title, description,artist) {
      this.title = title;
      this.description = description;
      this.artist = artist;
    }
}   