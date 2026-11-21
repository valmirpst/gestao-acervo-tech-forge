export interface Reservavel {
  reservar(usuario: string): void;
  cancelarReserva(): void;
  isReservado(): boolean;
}
