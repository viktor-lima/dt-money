import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormsInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const { 
    register, 
    handleSubmit, 
    formState: {isSubmitting}
   } = useForm<SearchFormsInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransaction(data: SearchFormsInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data);
  }


  return (
    <div>
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
          <input 
            type="text" 
            placeholder="Busque por transações" 
            {...register('query')}
          />
          <button type="submit" disabled={isSubmitting}>
            <MagnifyingGlass size={20} />
            Buscar
          </button>
        </SearchFormContainer>
    </div>   
  )
}