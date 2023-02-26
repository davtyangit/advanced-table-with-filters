import { Tooltip, Table } from 'antd'
import { Flags } from './components/flags/Flags'
import { SearchOutlined } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { useFunctional } from './useFuncional';
import { pdfLogo, xlsLogo } from './assets/svgs/index.svg';
import { CustomInput } from './components/customInput/CustomInput';
import medicine from '../src/assets/images/medicine.png'
import MedicineData from '../src/mock/Data.json'
import '../src/styles/styles.css'

export const MedTable = () => {
    const { componentRef, handlePrint, handleXLS, page, setPage, pageSize, setPageSize } = useFunctional()
    const { t } = useTranslation()

    const columns = [
        {
            key: '1',
            title: <h5 className='id'>{t('id')}</h5>,
            dataIndex: 'id',
            filterIcon: () => <SearchOutlined />,
            onFilter: (value, record) => record.id.toLowerCase().includes(value.toLowerCase()),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <CustomInput
                    t={t}
                    setSelectedKeys={setSelectedKeys}
                    clearFilters={clearFilters}
                    confirm={confirm}
                    selectedKeys={selectedKeys} />
            ),
            render: (address) => (
                <Tooltip placement="topLeft" title={address}>
                    {address}
                </Tooltip>
            ),
        },
        {
            key: '2',
            title: <h5>{t('name')}</h5>,
            dataIndex: 'name',
            sorter: (record1, record2) => {
                if (record1.name > record2.name) {
                    return 1
                } if (record1.name === record2.name) {
                    return 0
                } else {
                    return -1
                }
            },
            filterIcon: () => <SearchOutlined />,
            onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <CustomInput
                    t={t}
                    setSelectedKeys={setSelectedKeys}
                    clearFilters={clearFilters}
                    confirm={confirm}
                    selectedKeys={selectedKeys} />
            ),
        },
        {
            key: '3',
            title: <h5>{t('price')}</h5>,
            dataIndex: 'price',
            sorter: (record1, record2) => {
                if (record1.price > record2.price) {
                    return 1
                } if (record1.price === record2.price) {
                    return 0
                } else {
                    return -1
                }
            },
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) =>
                <CustomInput t={t} setSelectedKeys={setSelectedKeys} clearFilters={clearFilters} confirm={confirm} selectedKeys={selectedKeys} />,
            filterIcon: () => (<SearchOutlined />),
            onFilter: (value, record) => record.price == value
        },
        {
            key: '4',
            title: <h5>{t('country')}</h5>,
            dataIndex: 'country',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) =>
                <CustomInput t={t} setSelectedKeys={setSelectedKeys} clearFilters={clearFilters} confirm={confirm} selectedKeys={selectedKeys} />,
            filterIcon: () => <SearchOutlined />,
            onFilter: (value, record) => record.country.toLowerCase().includes(value.toLowerCase())
        },
        {
            key: '5',
            title: <h5>{t('status')}</h5>,
            dataIndex: 'Availanle',
            render: (Availanle) => (
                (<>{Availanle ? <p className='dostupno'>{t('available')}</p> : <p className='notavailable'>{t('notAvailable')}</p>}</>)
            ),
            filters: [
                { text: `${t('available')}`, value: true },
                { text: `${t('notAvailable')}`, value: false },
            ],
            onFilter: (value, record) => record.Availanle === value
        }
    ]

    return (
        <div>
            <div className='header'>
                <Flags />
                <div className='download-buttons'>
                    <img src={pdfLogo} className='download-btn pdf' onClick={handlePrint} />
                    <img src={xlsLogo} className='download-btn xls' onClick={handleXLS} />
                </div>
            </div>
            <div>
                <div ref={componentRef}>
                    {MedicineData &&
                        <Table
                            locale={{
                                triggerDesc: `${t('triggerDesc')}`,
                                triggerAsc: `${t('triggerAsc')}`,
                                cancelSort: `${t('cancelSort')}`,
                            }}
                            rowkey={(record) => record.key}
                            columns={columns}
                            dataSource={MedicineData}
                            scroll={{ x: 1000, y: 500 }}
                            bordered
                            expandRowByClick
                            expandable={{
                                expandedRowRender: record => (
                                    <div className='content'>
                                        <div className="row-info">
                                            <b className='title'>{t('name')}</b>
                                            <b>{record.name}</b>
                                            <b className='title'>{t('country')}</b>
                                            <b>{record.country}</b>
                                        </div>
                                        <b>{t('description')}</b>
                                        <img className='med-img' src={medicine} />
                                        <b className='title'>{t('date')} </b>
                                        <b>{record.date}</b>
                                        <p>{record.description}</p>
                                    </div>
                                ),
                                rowExpandable: record => record.description !== `${t('notAvailable')}`
                            }}
                            pagination={{
                                current: page,
                                pageSize: pageSize,
                                pageSizeOptions: [10, 15, 20],
                                onChange: (page, pageSize) => {
                                    setPage(page)
                                    setPageSize(pageSize)
                                }
                            }}>
                        </Table>
                    }
                </div>
            </div>
        </div>
    )
}
