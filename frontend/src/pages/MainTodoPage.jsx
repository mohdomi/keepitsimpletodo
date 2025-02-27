import { Input } from '../components/Input';
import { Items } from '../components/Items';
import { DeleteAll } from '../components/DeleteButton';

export function MainTodoPage(){

    return(
      <div>
        <DeleteAll />
        <Input></Input>
        <Items></Items>
      </div>
    )
  
}