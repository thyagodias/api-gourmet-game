import express from 'express'
import cors from 'cors'
import tree from './game.js'

const app = express();
app.use(express.json());
app.use(cors());


// Rota para obter tipos de pratos
app.get('/kind/:name', (request, response) => {
  const { name } = request.params
  const kindSearch = tree.getKind(name)

  if (!kindSearch) {
    return response.status(404).json({ error: 'Prato não encontrado' })
  }

  const kindObject = {
    node: kindSearch.value,
    right: kindSearch.right?.value || null,
    left: kindSearch.left?.value || null
  }
  return response.json({ data: kindObject })
})

// Rota para adicionar uma nova tipo de prato a parti do nó pai
app.post('/kind/:node', (request, response) => {
  const { node } = request.params
  const { dish, kind } = request.body
  const kindSearch = tree.getKind(node)

  if (!kindSearch) {
    return response.status(400).json({ message: 'Categoria encontrado' })
  }

  if (!dish || !kind) {
    return response.status(422).json({ message: 'Dados inválidos' })
  }

  tree.addKind(dish, kind, node)

  return response.status(201).json()
})

export default app