import { ItemAcervo } from "./ItemAcervo";
import { Reservavel } from "./Reservavel";

export class Livro extends ItemAcervo implements Reservavel {
  private _reservadoPor: string | null = null;

  constructor(
    titulo: string,
    anoPublicacao: number,
    private _autor: string,
    private _numeroPaginas: number,
  ) {
    super(titulo, anoPublicacao);
  }

  public get autor(): string {
    return this._autor;
  }

  public get numeroPaginas(): number {
    return this._numeroPaginas;
  }

  public reservar(usuario: string): void {
    if (this._reservadoPor) {
      throw new Error(`Livro "${this.titulo}" já está reservado por ${this._reservadoPor}.`);
    }
    this._reservadoPor = usuario;
  }

  public cancelarReserva(): void {
    if (!this._reservadoPor) {
      throw new Error(`Livro "${this.titulo}" não possui reserva ativa.`);
    }
    this._reservadoPor = null;
  }

  public isReservado(): boolean {
    return this._reservadoPor !== null;
  }

  public override calcularMulta(diasAtraso: number): number {
    if (diasAtraso <= 0) return 0;
    const taxaFixa = 2.5;
    return diasAtraso * taxaFixa;
  }
}
