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

## Desafio

- Listar todos os event owners (Rota tipo GET)
- Listar um unico event owner (Pegar o id pelo paramentro da url tipo GET ex: 'event-owner/1')
- Atualizar um event owner (Pegar o id pelo paramentro da url tipo PUT ex: 'event-owner/1')
    ```
    {
        "name": "Sandro",
        "email": "sandro@foice.com",
        "cpfCpnj": 12345678,
        "password": "compartilhada",
        "phone": 12345678,
        "pseudonym": "asdf"
    }
    
    ```

- Apagar um event owner (Pegar o id pelo paramentro da url tipo DELETE ex: 'event-owner/1')
    - retornar nada mas com um status 204