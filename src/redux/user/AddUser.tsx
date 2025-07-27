
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useDispatch } from "react-redux";
import type { ITask, IUser } from "@/types";
import { addUser } from "./userSlice";

const AddUser = () => {
  const form = useForm();

const dispatch = useDispatch();

  interface AddTaskFormValues {
    title: string;
  }

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(addUser(data as IUser))
  };

    return (
       <Dialog>
        <Button variant="outline" className='text-end'><DialogTrigger>+</DialogTrigger></Button>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add User</DialogTitle>
      <DialogDescription className="sr-only">Please fill up the form</DialogDescription>

    </DialogHeader>
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
     <FormLabel>Name</FormLabel>
        <FormLabel />
        <FormControl>
    <Input {...field} value={field.value || ""}></Input>
        </FormControl>
      </FormItem>
    )}
  />
 
   <Button type="submit" className="mt-4">Add</Button>
</form>
  
</Form>

  </DialogContent>
</Dialog>
    );
};

export default AddUser;