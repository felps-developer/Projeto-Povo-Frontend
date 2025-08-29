# Teste da Integração Frontend-Backend

## Status da API

✅ **API funcionando** - Teste realizado com sucesso

- URL: `http://localhost/Projeto-Povo/Projeto-Povo/Projeto-Povo-Backend/index.php?action=getCourses`
- Status: 200 OK
- CORS: Configurado corretamente
- Headers: Apenas uma instância de cada header

## Problemas Resolvidos

### 1. CORS Duplicado

**Problema:** Headers CORS duplicados causando erro

```
Access-Control-Allow-Origin header contains multiple values '*, *', but only one is allowed
```

**Solução:**

- Removidos headers CORS do `.htaccess`
- Mantidos apenas no `index.php`
- Headers agora são únicos

### 2. Query Parameters

**Problema:** Frontend usando query parameters, backend esperando rotas REST

**Solução:**

- Backend agora aceita ambos os formatos
- Query parameters: `?action=getCourses`
- Rotas REST: `/api/courses`

## Teste da API

```bash
# Teste via PowerShell
Invoke-WebRequest -Uri "http://localhost/Projeto-Povo/Projeto-Povo/Projeto-Povo-Backend/index.php?action=getCourses" -Method GET

# Resultado esperado:
# StatusCode: 200
# Access-Control-Allow-Origin: *
# Content: JSON com dados dos cursos
```

## Endpoints Disponíveis

### Query Parameters (Frontend atual)

- `?action=getCourses` - Lista todos os cursos
- `?action=getCourse&id={id}` - Busca curso específico

### Rotas REST (Alternativo)

- `/api/courses` - Lista todos os cursos
- `/api/courses/{id}` - Busca curso específico
- `/api/courses/featured` - Cursos em destaque
- `/api/courses/category/{categoria}` - Cursos por categoria

## Próximos Passos

1. ✅ **Backend corrigido** - CORS e query parameters funcionando
2. ✅ **Frontend rodando** - Servidor de desenvolvimento ativo
3. 🔄 **Teste integração** - Verificar se frontend consegue acessar API
4. 🎯 **Funcionalidade completa** - Landing page com dados reais

## Como Testar

1. Acesse `http://localhost:5173`
2. Abra as ferramentas de desenvolvedor (F12)
3. Vá para a aba Network
4. Recarregue a página
5. Verifique se a requisição para a API retorna 200 OK

## Estrutura de Dados

A API retorna:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Administração",
      "description": "Curso completo de Administração...",
      "workload": "1.500 horas",
      "modules": 7,
      "accessPeriod": "15 meses",
      "modality": "EAD",
      "price": "R$ 2.835,35",
      "category": "TÉCNICO",
      "instructor": "UANE"
    }
  ]
}
```
