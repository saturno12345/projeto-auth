import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import prisma from '@/lib/prisma-client'
import AddCategorias from './_components/add-produto'
import EditCategoria from './_components/edit-produto'
import DeleteCategoria from './_components/delete-produto'

export default async function CategoriasPage() {
  const produtos = await prisma.produtos.findMany({
    orderBy: {
      nome: 'asc'
    }
  })

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Produtos</h1>
        <AddCategorias />
      </div>

      {/* Caso não existam categorias */}
      {produtos.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-2 rounded-md border border-dashed p-8 text-center text-muted-foreground">
          <p>Nenhuma categoria cadastrada</p>
          <p className="text-sm">
            Clique em "Adicionar Categoria" para criar sua primeira categoria.
          </p>
        </div>
      ) : (
        // Lista de categorias
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {produtos.map((produto) => (
            <Card key={produto.id} className="transition-shadow hover:shadow-md">
              <CardHeader className="pb-3">
                <CardTitle className="line-clamp-1 text-lg">
                  {produto.nome}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-3">
                <p className="text-xs text-muted-foreground">ID: {produto.id}</p>
              </CardContent>

              <CardFooter className="flex items-center justify-end gap-2">
                <EditCategoria categoria={produto} />
                <DeleteCategoria produto={produto} />
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
