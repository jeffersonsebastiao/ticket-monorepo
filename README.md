- Criador de enventos
    - Criar enventos
    - Cada evento tem sua propria pagina

- Cliente
    - Criar sua conta
    - Compar o ingresso

- event_owner
    - name
    - pseudonym
    - email
    - phone
    - cpf or cpnj
    - password

- event
    - ticket_limit
    - event_date
    - event_hour
    - title
    - description
    - address
    - number

- client
    - name
    - email
    - phone
    - cpf
    - password

- ticket
    - hash
    - client_id
    - event_id

# Cadastro de usuario
- Verificar se email ja foi cadastrado
- Verificar se CNPJ é valido
- Verificar se senhas são iguais

# Desafio
- email e cpfCnpj são uniques
- EventOwner tem que ter uma coluna 'active': bolean
- cpfCnpj para string
