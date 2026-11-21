export class RepositorioMemoria<T extends { id: number }> {
  private _itens: T[] = [];

  public adicionar(item: T): void {
    this._itens.push(item);
  }

  public buscarPorId(id: number): T {
    const item = this._itens.find((i) => i.id === id);
    if (!item) {
      throw new Error(`Item com ID ${id} não foi encontrado.`);
    }
    return item;
  }

  public listarTodos(): readonly T[] {
    return [...this._itens];
  }

  public remover(id: number): void {
    const index = this._itens.findIndex((i) => i.id === id);
    if (index === -1) {
      throw new Error(`Não é possível remover: item com ID ${id} não existe.`);
    }
    this._itens.splice(index, 1);
  }

  public atualizar(id: number, dados: Partial<T>): T {
    const item = this.buscarPorId(id);
    Object.assign(item, dados);
    return item;
  }
}
