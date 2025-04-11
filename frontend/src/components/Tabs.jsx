import React, { useState } from 'react';
import { Radio, Space, Tabs as AntdTabs } from 'antd';
const Tabs = () => {
    const items = [
        {
            label: 'Taha',
            key: 0,
            children: <div dangerouslySetInnerHTML={{ __html: '<h1 classname="!text-3xl text-white-false"> This is HTML content</h1>' }}></div>
        }
    ]
    return (
        <>
            <AntdTabs
                className='!text-white-false'
                tabPosition={'left'}
                items={items}
            />
        </>
    );
};
export default Tabs