'use client'
import React from 'react'
import AccountScrollArea from './AccountScrollArea'


const AccountSelect = ({ field }: { field: any }) => {
    const accounts = [
        { id: 1, name: 'lucky_ghaby', type: 'instagram' },
        { id: 2, name: 'lucky_ghaby', type: 'twitter' },
        { id: 3, name: 'dickson', type: 'instagram' },
    ]

    const groupedAccounts = accounts.reduce((acc: any, account: any) => {
        if (!acc[account.type]) {
            acc[account.type] = [];
        }
        acc[account.type].push(account);
        return acc
    }, {})

    return (
        <div className='w-full min-h-72 bg-white rounded-md shadow-md p-3'>
            <div className='flex'>
                <div className={`flex-1 text-center cursor-pointer rounded-r-lg`}>Select Account</div>
            </div>
            <div className='mt-5'>
                {Object.entries(groupedAccounts).map(([type, typeAccounts]) => (
                    <AccountScrollArea key={type} data={typeAccounts} field={field} title={type} />
                ))}
            </div>
        </div >
    )
}

export default AccountSelect