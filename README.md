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

# Desafio
- Criar rota de validação de cadastro
    -- Pegar hash da rota
    -- comparar hash com o do banco
    -- verificar se ja foi usado
    -- verificar a validade da data
    -- marcar o hash como usado
    -- marcar o event owner como active
