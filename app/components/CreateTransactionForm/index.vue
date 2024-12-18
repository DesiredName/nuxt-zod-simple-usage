<template>
    <UForm
        :state="form_model"
        :schema="transaction_schema"
        @submit="handle_form_submit"
    >
        <h2>Add Transaction</h2>
        <UDivider />
        <UFormGroup
            label="Sum"
            name="sum"
        >
            <UInput
                type="number"
                v-model.trim.number="form_model.sum"
            />
        </UFormGroup>
        <UFormGroup
            label="Transaction type"
            name="props.type"
            required
        >
            <USelect
                value-attribute="id"
                option-attribute="name"
                :options="transaction_types"
                v-model.number="form_model.props.type"
            />
        </UFormGroup>

        <!-- conditional rendering -->
        <UFormGroup
            v-if="form_model.props.type === income_transaction_type.id"
            label="Income source"
            name="props.source"
        >
            <UInput v-model="form_model.props.source" />
        </UFormGroup>

        <UFormGroup
            v-if="form_model.props.type === expence_transaction_type.id"
            label="Expence category"
            name="props.category"
        >
            <UInput v-model="form_model.props.category" />
        </UFormGroup>

        <UFormGroup
            v-if="form_model.props.type === investment_transaction_type.id"
            label="Investment category"
            name="props.category"
        >
            <UInput v-model="form_model.props.category" />
        </UFormGroup>
        <!-- conditional rendering -->


        <UFormGroup label="Description">
            <UTextarea v-model="form_model.description" />
        </UFormGroup>

        <UButton
            type="submit"
            variant="ghost"
        >
            Submit
        </UButton>
    </UForm>
</template>

<script
    setup
    lang="ts"
>
import type {
    TransactionType,
    CreateTransactionFormState
} from '~/components/CreateTransactionForm/types';
import {
    empty_form_state,
    expence_transaction_type,
    income_transaction_type,
    investment_transaction_type
} from '~/components/CreateTransactionForm/constants';
import { transaction_schema } from './schema';

const transaction_types: TransactionType[] = [
    income_transaction_type,
    expence_transaction_type,
    investment_transaction_type
];

const form_model = useState<CreateTransactionFormState>(
    'form_model',
    empty_form_state
);

const handle_form_submit = (event: Event) => {
    console.dir(form_model.value)
    event.stopPropagation();
    reset_form();
}

const reset_form = () => {
    form_model.value = empty_form_state()
}
</script>