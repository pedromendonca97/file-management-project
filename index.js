import path from "path";
import readlineSync from "readline-sync";
import { fileURLToPath } from "url";
import fileManager from "./fileManager.js"; // Importando funções de "./fileManager.js"

async function main() { // Função  assíncrona
  const __dirname = path.dirname(fileURLToPath(import.meta.url))
  const baseDir = path.join(__dirname, "my_files")  // Criando diretório

  fileManager.createDirectory(baseDir)

  while (true) {
    console.log('\nMenu:')
    console.log('1. Criar arquivo')
    console.log('2. Listar arquivo')
    console.log('3. ler arquivo')
    console.log('4. Escrever arquivo')
    console.log('5. Deletar arquivo')
    console.log('6. Sair')

    const choice = readlineSync.question("Escolha:")

    // try/catch impede que a aplicação seja interrompida depois de um erro
    try {

      switch (choice) {

        case "1":
          const fileName = readlineSync.question("Digite o nome do arquivo: ")
          const fileContent = readlineSync.question("Digite o conteúdo do novo arquivo: ")

          const createFilePath = path.join(baseDir, fileName) // __dirname => Nome do diretório atual onde estou

          const fileMessage = await fileManager.createFile(createFilePath, fileContent) // await => Programa vai rodar depois que tiver a resposta da Promise

          console.log(fileMessage)
          break

        case "2":
          const files = await fileManager.listFiles(baseDir)

          console.log("Arquivos no diretório:", files)
          break

        case "3":
          const readFileName = readlineSync.question("Digite o nome do arquivo: ")
          const readFilePath = path.join(baseDir, readFileName)
          const content = await fileManager.readFiles(readFilePath)

          console.log("Conteúdo do arquivo: ", content)
          break

        case "4":
          const writeFileName = readlineSync.question("Digite o nome do arquivo: ")
          const writeFilePath = path.join(baseDir, writeFileName)
          const newContent = readlineSync.question("Escreva o conteúdo do arquivo: ")
          const message = await fileManager.writeFiles(writeFilePath, newContent)

          console.log(message)
          break
        case "5":
          const deleteFileName = readlineSync.question("Digite o nome do arquivo a ser deletado: ")
          const deleteFilePath = path.join(baseDir, deleteFileName)
          await fileManager.deleteFile(deleteFilePath)

          console.log("Arquivo deletado com sucesso")
          break

        case "6":
          console.log("Saindo...")
          return // return para parar o switch

        default:
          console.log("Opção inválida. Tente novamente")

      }

    } catch (err) {
      console.log(err)
    }

  }
}

main()
