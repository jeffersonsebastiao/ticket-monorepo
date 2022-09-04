declare namespace Express {
    interface Request {
        /**  o valor do context so sera preenchido quando a rota for protegida com o isAuthMiddleware */
        context: {
            user: {
                id: number
            }
        }
    }
}