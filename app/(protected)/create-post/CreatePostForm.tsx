"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import AccountSelect from '@/components/AccountSelect'
import PostTypeSelect from '@/components/PostTypeSelect'
import ScheduleSelect from '@/components/ScheduleSelect'
import MediaPreview from "@/components/MediaPreview"

const formSchema = z.object({
    mediaFiles: z.array(z.instanceof(File)).optional(),
    textCaption: z.string().optional(),
    textContent: z.string().optional(),
    postType: z.enum(['POST', 'REEL', 'STORY']),
    schedule: z.enum(['NOW', 'LATER']),
    postDate: z.date().optional(),
    postTime: z.string().optional(),
    postAccounts: z.number().array(),
    isTextContent: z.boolean(),
})

const CreatePostForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mediaFiles: [],
            postAccounts: [],
            postType: 'POST',
            schedule: 'NOW',
            textCaption: '',
            textContent: '',
            isTextContent: true,
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className='w-full grid grid-cols-1 gap-4 lg:grid-cols-7'>

                    <div className='lg:col-start-1 lg:col-span-5 space-y-6'>
                        <div className='bg-white shadow-md rounded-md p-4 md:p-6'>
                            <div className='text-xl rounded-t-md p-2'>Content</div>

                            <FormField
                                control={form.control}
                                name="isTextContent"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <MediaSwitcher field={field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className='p-4 flex flex-wrap-reverse md:flex-nowrap'>
                                {form.getValues().isTextContent ?
                                    <div className="w-full">
                                        <FormField
                                            control={form.control}
                                            name="textContent"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <textarea className='border p-3 w-full h-32' placeholder="write out your content" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    : <div className='w-full flex flex-col gap-4 md:gap-10'>
                                        <div className="w-full">
                                            <FormField
                                                control={form.control}
                                                name="mediaFiles"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <div><MediaPreview field={field} /></div>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                        <div className="w-full">
                                            <FormField
                                                control={form.control}
                                                name="textCaption"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormControl>
                                                            <textarea className='border w-full p-3  h-32' placeholder="Add caption for media" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    </div>}
                            </div>
                        </div>


                        <FormField
                            control={form.control}
                            name="postType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        {/* <Input placeholder="shadcn" {...field} /> */}
                                        <PostTypeSelect field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="schedule"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <ScheduleSelect field={field} form={form} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="lg:col-start-6 lg:col-span-2">

                        <FormField
                            control={form.control}
                            name="postAccounts"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <AccountSelect field={field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>

                <Button type="submit">Submit</Button>
            </form>
        </Form >
    )
}

export default CreatePostForm


const MediaSwitcher = ({ field }: { field: any }) => {
    return (
        <div className='flex mb-4 justify-center'>
            <div className='inline-flex bg-gray-100 rounded-lg w-48'>
                <button
                    type="button"
                    onClick={() => field.onChange(true)}
                    className={`flex items-center gap-2 px-4 py-1 w-full rounded-lg transition-all ${field.value
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 7V4h16v3" />
                        <path d="M5 20h14" />
                        <path d="M12 14V5" />
                    </svg>
                    Text
                </button>
                <button
                    type="button"
                    onClick={() => field.onChange(false)}
                    className={`flex items-center gap-2 px-4 py-1 w-full rounded-lg transition-all ${!field.value
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                    </svg>
                    Media
                </button>
            </div>
        </div>
    )
}
