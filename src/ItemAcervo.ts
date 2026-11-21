export abstract class ItemAcervo {
  private static _contadorId: number = 0;
  public readonly id: number;
  private _disponivel: boolean = true;

  constructor(
    private _titulo: string,
    private _anoPublicacao: number
  ) {
    ItemAcervo._contadorId++;
    this.id = ItemAcervo._contadorId;
  }

  public get titulo(): string {
    return this._titulo;
  }

  public get anoPublicacao(): number {
    return this._anoPublicacao;
  }

  public get disponivel(): boolean {
    return this._disponivel;
  }

  public get statusDisponibilidade(): string {
    return this._disponivel ? "Disponível para empréstimo" : "Emprestado";
  }

  public emprestar(): void {
    if (!this._disponivel) {
      throw new Error(`Item "${this._titulo}" já está emprestado.`);
    }
    this._disponivel = false;
  }

  public devolver(): void {
    if (this._disponivel) {
      throw new Error(`Item "${this._titulo}" já se encontra disponível.`);
    }
    this._disponivel = true;
  }

  public abstract calcularMulta(diasAtraso: number): number;
}
