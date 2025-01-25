import {
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form"

const TimePicker = ({ form, isDisabled }: { form: any, isDisabled: boolean }) => {
    const disabled = isDisabled || form.getValues().postDate == undefined

    if (disabled) {
        return null
    }
    return (
        <FormField
            control={form.control}
            name="postTime"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <div>
                            <input onChange={field.onChange} defaultValue={field.value} disabled={isDisabled || form.getValues().postDate == undefined} id="timeInput" type="time" className=" border rounded-md py-[6px] px-2 text-sm w-[110px]" />
                        </div>
                    </FormControl>
                </FormItem>
            )}
        />
    )
}

export default TimePicker