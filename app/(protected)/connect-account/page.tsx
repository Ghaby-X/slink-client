import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Atom, Instagram, Twitter, User, Youtube } from "lucide-react"


const page = () => {
    const data = [
        {
            title: 'instagram',
            icon: <Instagram className="text-pink-700" width={35} height={35} />,
            action: '',
            items: [
                {
                    id: 1,
                    name: "lucky_ghaby",
                    profile: <User width={15} />
                },
                {
                    id: 2,
                    name: "dickson",
                    profile: <User width={15} />
                },
            ]
        },
        {
            title: 'youtube',
            icon: <Youtube className="text-red-700" width={35} height={35} />,
            action: '',
        },
        {
            title: 'twitter',
            icon: <Twitter className="text-blue-500" width={35} height={35} />,
            action: '',
            items: [
                {
                    id: 3,
                    name: 'lucky_ghaby',
                    profile: <Atom width={15} />
                }
            ]
        },
    ]
    return (
        <Card className="" >
            <CardHeader>
                <CardTitle>Connect Accounts</CardTitle>
                <CardDescription>Add more accounts to manage</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-10">

                    {
                        data.map((items, key) => (
                            <div key={key}>
                                <div className="flex gap-4 items-center">
                                    {items.icon}
                                    <div className="bg-gray-700 text-white p-1 px-4 hover:bg-gray-800 rounded-lg cursor-pointer">connect</div>
                                    <div className="flex gap-4 text-sm">
                                        {items.items?.map((item) => <div className="bg-gray-200 rounded-full p-1 px-4 flex gap-5 items-center" key={item.id}><span className="flex gap-1">{item.profile} {item.name}</span> <span>x</span></div>)}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </CardContent>

            <CardFooter className="flex flex-col items-start">
                <Separator />
                <div className="flex flex-row gap-4 py-6">
                    <div>refresh</div>
                    <div>disconnect all</div>
                </div>
            </CardFooter>
        </Card>

    )
}

export default page