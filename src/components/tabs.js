import React, { useState } from 'react';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import './tabs.css';


const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'All',
            title: '',
            content: <App/>
        },
        {
            id: 2,
            tabTitle: 'Flyers & Brochures',
            title: '',
            content: <App2/>
        },
        {
            id: 3,
            tabTitle: 'Websites',
            title: '',
            content: <App3/>
        },
        {
            id: 4,
            tabTitle: 'Books & Broadsides',
            title: '',
            content: <App4/>
        },
        {
            id: 5,
            tabTitle: 'Logos',
            title: '',
            content: <App5/>
        },
        {
            id: 6,
            tabTitle: 'Videos',
            title: '',
            content: <App6/>
        }
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div id='TabWrapper'>
            <div className='tabs'>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}> {tab.tabTitle} </button>
                )}
            </div>
            <div className='content'>
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` && <div><span className='title'>{tab.title}</span><span>{tab.content}</span></div>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Tabs;