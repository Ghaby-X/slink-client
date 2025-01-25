import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import DatePicker from "./DatePicker"
import TimePicker from "./TimePicker"

const ScheduleSelect = ({ field, form }: { field: any, form: any }) => {
    return (
        <div className='bg-white rounded-md shadow-md p-4 sm:p-6'>
            <div className='text-xl rounded-t-md px-4 py-[3px]'>Schedule</div>
            <RadioGroup defaultValue={field.value} onValueChange={field.onChange} className='p-6 space-y-3'>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="NOW" id="now" />
                    <Label htmlFor="now">Now</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="LATER" id="later" />
                    <Label htmlFor="later">Later</Label>
                </div>
            </RadioGroup>
            <div className="p-4 md:p-4 flex gap-2">
                <div className="flex-1 sm:flex-none">
                    <DatePicker form={form} isDisabled={field.value == 'NOW'} />
                </div>
                <TimePicker form={form} isDisabled={field.value == 'NOW'} />
            </div>
        </div>
    )
}

export default ScheduleSelect