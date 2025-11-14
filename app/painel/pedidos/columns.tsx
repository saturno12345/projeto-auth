'use client'

import { ColumnDef } from "@tanstack/react-table"
import DeletePedido from "./_components/delete-pedido"
import EditPedido from "./_components/edit-pedido"


// Defina o tipo diretamente aqui
type Pedido = {
  id: string
  nome: string
  endereco: string
  telefone: string
  produtos: { id: string; nome: string }[]
  createdAt: Date
  updatedAt: Date
}

export const columns: ColumnDef<Pedido>[] = [
  { 
    accessorKey: "nome", 
    header: "Cliente" 
  },
  { 
    accessorKey: "endereco", 
    header: "Endereço" 
  },
  { 
    accessorKey: "telefone", 
    header: "Telefone" 
  },
  {
    id: "produtos",
    header: "Produtos",
    cell: ({ row }) => {
      const produtos = row.original.produtos
      return produtos.map((p) => p.nome).join(", ")
    },
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => {
      const pedido = row.original
      return (
        <div className="flex gap-2">
          <EditPedido pedido={pedido} />
          <DeletePedido pedido={pedido} />
        </div>
      )
    },
  },
]
