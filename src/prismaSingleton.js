const { PrismaClient } = require('@prisma/client')

let prisma

class PrismaSingleton {
  static getInstance() {
    if (!prisma) {
      prisma = new PrismaClient()
    }
    return prisma
  }
}

module.exports = PrismaSingleton