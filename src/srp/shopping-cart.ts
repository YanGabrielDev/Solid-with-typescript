type CartItem = { name: string; price: number };
export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private orderStatus: 'open' | 'closed' = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }
  total(): number {
    return Number(
      this._items
        .reduce((total, current) => total + current.price, 0)
        .toFixed(2),
    );
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrinho esta vazio');
      return
    }
    this.orderStatus = 'closed';
    this.sendMenssage('seu pedido esta sendo processado');
    this.saveOrder();
    this.clear();
  }

  sendMenssage(msg: string): void{
    console.log("Mensagem de enviada")
  }

  saveOrder(): void{
    console.log("Pedido salvo")
  }

  clear(): void{
    console.log("o carrinho foi limpo")
     this._items.length = 0;
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'teclado', price: 180.8 });
shoppingCart.addItem({ name: 'mouse', price: 80.88 });
shoppingCart.addItem({ name: 'headset', price: 280.5 });

console.log(shoppingCart.total());
