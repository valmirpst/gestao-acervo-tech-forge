import { ItemAcervo } from "./ItemAcervo";

export class JogoEletronico extends ItemAcervo {
  constructor(
    titulo: string,
    anoPublicacao: number,
    private _plataforma: string,
  ) {
    super(titulo, anoPublicacao);
  }

  public get plataforma(): string {
    return this._plataforma;
  }

  public override calcularMulta(diasAtraso: number): number {
    if (diasAtraso <= 0) return 0;
    const taxaFixa = 5.0;
    return diasAtraso * taxaFixa;
  }
}
