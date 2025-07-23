
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";


const AddTaskModal = () => {
  const form = useForm();
  interface AddTaskFormValues {
    title: string;
  }

  const onSubmit = (data: AddTaskFormValues) => {
    console.log(data);
  };

    return (
       <Dialog>
        <Button variant="outline" className='text-end'><DialogTrigger>Add Task</DialogTrigger></Button>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Task Here</DialogTitle>
      

    </DialogHeader>
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
        <FormLabel />
        <FormControl>
    <Input {...field}></Input>
        </FormControl>
      </FormItem>
    )}
  />
   <Button type="submit" className="mt-4">Save Changes</Button>
</form>
  
</Form>


  </DialogContent>
</Dialog>
    );
};

export default AddTaskModal;