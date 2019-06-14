class ProductRepository {
  constructor() {
    this.products = [{
      title: 'Panela',
      description: 'Um ótima panela',
      price: 30.50
    },
    {
      title: 'Prato',
      description: 'Um prato redondo',
      price: 10.40
    }]
  }
}

module.exports = new ProductRepository()