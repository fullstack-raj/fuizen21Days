import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { DetailsList, DetailsListLayoutMode, IColumn } from '@fluentui/react';
import { Link } from 'react-router-dom';
 

const View = () => {

    const [data, setData] = useState<any>();

    const getData = async () => {
        try {
            const url = 'http://localhost:5000/data'
            const result: any = await axios.get(url);
            setData(result.data)
        } catch (err) {
            console.log(err);
        }
    };

    const deleteRequest = async (id: any) => {
        try {
            const url = `http://localhost:5000/data/${id}`;
            const result: any = await axios.delete(url);
            console.log(result);
            getData();
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        getData();
    }, [])

  
    const columns: IColumn[] = [
        {
            key: 'column1',
            name: 'Name',
            fieldName: 'name',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column2',
            name: 'date of birth',
            fieldName: 'dateofbirth',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column3',
            name: 'phone number',
            fieldName: 'phonenumber',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column4',
            name: 'Email',
            fieldName: 'email',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column5',
            name: 'job title',
            fieldName: 'jobtitle',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column6',
            name: 'department',
            fieldName: 'department',
            minWidth: 100,
            maxWidth: 200,
            isResizable: true
        },
        {
            key: 'column7',
            name: 'company name',
            fieldName: 'companyname',
            minWidth: 100,
            maxWidth: 150,
            isResizable: true
        },
        {
            key: 'column8',
            name: ' ',
            fieldName: 'id',
            minWidth: 200,
            maxWidth: 300,
            isResizable: true,
            onRender: (item: any) => (
                item.id &&
                <>
                    <Link className='btn' to={`/view/${item.id}`}>View</Link>
                    <Link className='btn' to={`/update/${item.id}`}>Edit</Link>
                    <Link className='btn' onClick={() => deleteRequest(item.id)} to=''>Delete</Link>
                </>
            )
        },
    ];   

    return (
        <div>

            <h1>View </h1>
            {data &&
                <DetailsList
                    items={data}
                    columns={columns}
                    setKey="set"
                    layoutMode={DetailsListLayoutMode.justified}
                />}
        </div>
    )
}

export default View