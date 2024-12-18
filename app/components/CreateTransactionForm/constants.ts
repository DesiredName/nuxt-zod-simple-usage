import type { CreateTransactionFormState, TransactionType } from "./types"

export const income_transaction_type: TransactionType = {
    id: 0,
    name: 'Income',
}
export const expence_transaction_type: TransactionType = {
    id: 1,
    name: 'Expence'
}
export const investment_transaction_type: TransactionType = {
    id: 2,
    name: 'Investment'
}

export const empty_form_state = (): CreateTransactionFormState => ({
    sum: 0,
    props: {
        type: income_transaction_type.id,
        source: '',
        category: '',
    },
    description: '',
})
