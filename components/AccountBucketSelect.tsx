import React from 'react'
import { Checkbox } from './ui/checkbox'

const AccountBucketSelect = ({ data }: { data: any }) => {
    if (!data) {
        return null
    }
    return (
        <div>
            {data.map((item: any) => (
                <>
                    <div key={item.id} className="text-sm">
                        <label className='flex gap-2 items-center'>
                            <Checkbox

                            />
                            <p>{item.name}</p>
                        </label>
                    </div>
                </>
            ))}
        </div>
    )
}

export default AccountBucketSelect