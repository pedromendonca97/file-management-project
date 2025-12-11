// Variáveis globais (Fora de funções)
import fs from "fs"; // Arquivos do sistema (fs)

// Criando diretório
function createDirectory(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        reject(err) // Rejeita Promise em caso de erro
      } else {
        resolve(`Directory "${dirPath}" created successfully`) // Resolve a Promise em caso de sucesso
      }
    })
  })
}

// Criando arquivo
function createFile(filePath, content = "") {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf-8", (err) => { // UTF-8 (Arquivos de texto)
      if (err) {
        reject(err) // Rejeita Promise em caso de erro
      } else {
        resolve(`Directory "${filePath}" created successfully`) // Resolve a Promise em caso de sucesso
      }
    })
  })
}

function listFiles(dirPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) {
        reject(err) // Rejeita Promise em caso de erro
      } else {
        resolve(files) // Resolve a Promise com lista de arquivos
      }
    })
  })
}

function readFiles(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      if (err) {
        reject(err) // Rejeita Promise em caso de erro
      } else {
        resolve(data) //  Resolve Promise com conteúdo do arquivo
      }
    })
  })
}

function writeFiles(filePath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, "utf-8", (err) => {
      if (err) {
        reject(err) // Rejeita Promise em caso de erro
      } else {
        resolve("File written sucessfully") // Resolve a Promise indicando sucesso
      }
    })
  })
}

function deleteFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err) // Rejeita a Promise em caso de erro
      } else {
        resolve("File deleted successfully") // Resolve a Promise indicando sucesso
      }
    })
  })
}

// Exportando as funções
export default {
  createDirectory,
  createFile,
  listFiles,
  readFiles,
  writeFiles,
  deleteFile
} 

// Promise é uma biblioteca do nodejs que cria assíncronismo (permite executar tarefas demoradas sem bloquear o thread principal, permitindo que a aplicação continue funcionando)
// Arrow function (função anônima) é uma função que é chamada  por trás de outra (callback)
