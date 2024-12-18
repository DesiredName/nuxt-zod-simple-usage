import { z } from 'zod'
import { expence_transaction_type, income_transaction_type, investment_transaction_type } from './constants'

export const transaction_schema = z.object({
    sum: z.number().gt(0),
    props: z.discriminatedUnion("type", [
        z.object({ type: z.literal(income_transaction_type.id), source: z.string().min(1) }),
        z.object({ type: z.literal(expence_transaction_type.id), category: z.string().min(1) }),
        z.object({ type: z.literal(investment_transaction_type.id), category: z.string().min(1) }),
    ]),
    description: z.string().optional(),
});
