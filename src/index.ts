import { ItemAcervo } from "./ItemAcervo";
import { Livro } from "./Livro";
import { JogoEletronico } from "./JogoEletronico";
import { RepositorioMemoria } from "./RepositorioMemoria";

function main() {
  console.log("=== SISTEMA DE GESTÃO DE ACERVO (TECH FORGE 4) ===");

  const repositorio = new RepositorioMemoria<ItemAcervo>();

  const livro1 = new Livro("Programação Limpa", 2008, "Fulano de Tal", 464);
  const livro2 = new Livro("O Senhor dos Anéis", 1954, "J.R.R. Tolkien", 1200);
  const jogo1 = new JogoEletronico("Fortnite", 2017, "Xbox One");

  repositorio.adicionar(livro1);
  repositorio.adicionar(livro2);
  repositorio.adicionar(jogo1);

  console.log("\n--- Itens Cadastrados no Acervo ---");
  for (const item of repositorio.listarTodos()) {
    console.log(`[ID ${item.id}] ${item.titulo} (${item.anoPublicacao}) - Status: ${item.statusDisponibilidade}`);
  }

  console.log("\n--- Empréstimo e Devolução ---");
  livro1.emprestar();
  console.log(`Item "${livro1.titulo}" emprestado com sucesso!`);
  console.log(`Novo status: ${livro1.statusDisponibilidade}`);

  console.log("\n--- Sistema de Reservas (Interface Reservavel) ---");
  livro1.reservar("Aluno Tech Forge");
  console.log(`Livro "${livro1.titulo}" reservado? ${livro1.isReservado()}`);

  console.log("\n--- Cálculo de Multas por Atraso (5 dias) ---");
  console.log(`Multa Livro (${livro1.titulo}): R$ ${livro1.calcularMulta(5).toFixed(2)}`);
  console.log(`Multa Jogo (${jogo1.titulo}): R$ ${jogo1.calcularMulta(5).toFixed(2)}`);

  console.log("\n--- Teste de Exceções ---");
  try {
    console.log("Tentando emprestar um livro já emprestado...");
    livro1.emprestar();
  } catch (error) {
    if (error instanceof Error) {
      console.log(`[Exceção Capturada com Sucesso]: ${error.message}`);
    }
  }

  try {
    console.log("Tentando buscar item inexistente por ID...");
    repositorio.buscarPorId(999);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`[Exceção Capturada com Sucesso]: ${error.message}`);
    }
  }

  console.log("\n=== Execução concluída com sucesso! ===");
}

main();
