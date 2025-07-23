
import {
  Dialog,
  DialogContent,

  DialogDescription,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


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
      <DialogDescription className="sr-only">Please fill up the form</DialogDescription>

    </DialogHeader>
<Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)}>
  <FormField
    control={form.control}
    name="title"
    render={({field}) => (
      <FormItem>
     <FormLabel>Title</FormLabel>
        <FormLabel />
        <FormControl>
    <Input {...field} value={field.value || ""}></Input>
        </FormControl>
      </FormItem>
    )}
  />
  <FormField
    control={form.control}
    name="description"
    render={({field}) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormLabel />
        <FormControl>
    <Input {...field} value={field.value || ""}></Input>
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