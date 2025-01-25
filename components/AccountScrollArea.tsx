import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"


const AccountScrollArea = ({ title, data, field }: { title: string, data: any, field: any }) => {
    if (!data) {
        return null
    }

    return (
        <ScrollArea className="max-h-72 w-full rounded-md">
            <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">{title}</h4>
                <div className='space-y-3'>
                    {data.map((item: any) => (
                        <div key={item.id} className="text-sm">
                            <label className='flex gap-2 items-center'>
                                <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                        return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                    (value: any) => value != item.id
                                                )
                                            )
                                    }}
                                />
                                <p>{item.name}</p>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </ScrollArea>
    )
}

export default AccountScrollArea