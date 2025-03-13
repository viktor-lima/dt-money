import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income, outcome']),
})
 
type NewTransactionFormsInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {

  const { 
    register, 
    handleSubmit,  
    formState: {isSubmitting}
  } = useForm<NewTransactionFormsInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormsInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }

  return (
    <Dialog.Portal>
        <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton> 
          <X size={24}/>
        </CloseButton>

        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text" placeholder="Descrição" required {...register('description')}/>
          <input type="number" placeholder="Preço" required {...register('price', { valueAsNumber: true})}/>
          <input type="text" placeholder="Categoria" required {...register('category')}/>

          <TransactionType>
            <TransactionTypeButton value="income" variant="income">
              <ArrowCircleUp size={24}/>
              Entrada
            </TransactionTypeButton>
            <TransactionTypeButton value="outome" variant="outome">
              <ArrowCircleDown size={24}/>
              Entrada
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
      </Dialog.Portal>
  )
  
}