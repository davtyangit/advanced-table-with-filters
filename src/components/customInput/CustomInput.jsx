import { Input } from 'antd'
import React from 'react'

export const CustomInput = ({ t, confirm, selectedKeys, setSelectedKeys, clearFilters }) => {
    return (
        <>
            <Input
                autoFocus
                placeholder={t('search')}
                value={selectedKeys[0]}
                onChange={(event) => {
                    setSelectedKeys(event.target.value ? [event.target.value] : [])
                }}
                onPressEnter={() => {
                    confirm()
                }}

                onBlur={() => {
                    confirm()
                }}
            />
            <div>
                <button className='search' onClick={() => confirm()}>{t('search')}</button>
                <button className='reset' onClick={() => {
                    clearFilters()
                    confirm()
                }}>{t('reset')}</button>
            </div>
        </>
    )
}
