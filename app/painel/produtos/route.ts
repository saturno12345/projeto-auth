// app/api/produtos/route.ts
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma-client'

export async function GET() {
  try {
    const produtos = await prisma.produtos.findMany({
      select: {
        id: true,
        nome: true,
        // adicione outros campos se necessário
      },
      orderBy: {
        nome: 'asc'
      }
    })
    
    return NextResponse.json(produtos)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar produtos' },
      { status: 500 }
    )
  }
}