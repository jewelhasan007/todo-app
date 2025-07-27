
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
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";
import type { ITask } from "@/types";
 
const AddTaskModal = () => {
  const form = useForm();

const dispatch = useDispatch();

  interface AddTaskFormValues {
    title: string;
  }

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    dispatch(addTask(data as ITask))
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
 <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
             
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