import React from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


const PostTypeSelect = ({ field }: { field: any }) => {
    return (
        <div className='bg-white rounded-md shadow-md p-4 sm:p-6'>
            <div className='text-xl text-black rounded-t-md px-4 py-[3px]'>Post type</div>
            <RadioGroup defaultValue={field.value} onValueChange={field.onChange} className='p-6 space-y-3'>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="POST" id="post" />
                    <Label htmlFor="post">Post</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="REEL" id="reel" />
                    <Label htmlFor="reel">Reel / shorts</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="STORY" id="story" />
                    <Label htmlFor="story">story</Label>
                </div>
            </RadioGroup>
        </div>
    )
}

export default PostTypeSelect