#!/bin/bash

# Script de Deploy Automatizado - Agência Margaretas
# Este script automatiza o processo de deploy na Vercel

echo "🚀 Iniciando deploy da Agência Margaretas..."

# Verificar se estamos no diretório correto
if [ ! -f "package.json" ]; then
    echo "❌ Erro: package.json não encontrado. Execute este script na raiz do projeto."
    exit 1
fi

# Verificar se o Vercel CLI está instalado
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI não encontrado. Instalando..."
    npm install -g vercel
fi

# Verificar se as dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    pnpm install
fi

# Executar lint
echo "🔍 Executando lint..."
pnpm lint

# Build do projeto
echo "🏗️ Fazendo build do projeto..."
pnpm build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
else
    echo "❌ Erro no build. Verifique os logs acima."
    exit 1
fi

# Deploy na Vercel
echo "🚀 Fazendo deploy na Vercel..."
vercel --prod

echo "🎉 Deploy concluído!"
echo "📱 Seu site está no ar!"
echo "🔗 Verifique o status em: https://vercel.com/dashboard" 