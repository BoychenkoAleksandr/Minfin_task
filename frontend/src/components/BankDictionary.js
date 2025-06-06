import React, {useEffect} from 'react';
import {Button, Pagination, Table} from 'antd';
import {getBanks} from "../actions/bankActions";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../actions/loginActions";


const BankDictionary = () => {
    const {pageable, totalElements, content} = useSelector((state) => state.banks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBanks(pageable));
    }, []);

    const columns = [
        {
            title: '№',
            dataIndex: 'NrBank',
            key: 'NrBank',
        },
        {
            title: 'Банк/Филиал',
            dataIndex: 'typ',
            key: 'typ',
        },
        {
            title: 'БИК',
            dataIndex: 'CDBank',
            key: 'CDBank',
        },
        {
            title: 'БИК головного банка',
            dataIndex: 'CDHeadBank',
            key: 'CDHeadBank',
        },
        {
            title: 'Статус БИК',
            dataIndex: 'BICStatus',
            key: 'BICStatus',
        },
        {
            title: 'Наименование',
            dataIndex: 'NmBankShort',
            key: 'NmBankShort',
        },
        {
            title: 'Населенный пункт',
            dataIndex: 'AdrBank',
            key: 'AdrBank',
        },
        {
            title: 'Код контроля',
            dataIndex: 'CdControl',
            key: 'CdControl',
        },
        {
            title: 'Дата контроля',
            dataIndex: 'DtControl',
            key: 'DtControl',
        },
        {
            title: 'БИК приемника',
            dataIndex: 'CdBankSuccessor',
            key: 'CdBankSuccessor',
        }
    ];

    const onClick = () => {
        dispatch(logout())
    };


    return (
        <>
            <Button
                type="primary"
                style={{ marginLeft: 'auto'}}
                onClick={onClick}>
                Выход
            </Button>
            <Table
                dataSource={content}
                columns={columns}
                pagination={false}
            />
            <Pagination
                current={pageable.pageNumber + 1}
                pageSize={pageable.pageSize}
                total={totalElements}
                style={{marginRight: '0', marginLeft: 'auto'}}
                onShowSizeChange={(current, pageSize) => dispatch(getBanks({
                    page: 0, size: pageSize
                }))}
                onChange={(current, pageSize) => dispatch(getBanks({
                    page: current - 1, size: pageSize
                }))}
            />
        </>
    );
}

export default BankDictionary;