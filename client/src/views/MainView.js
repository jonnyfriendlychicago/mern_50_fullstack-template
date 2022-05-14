import React, { useState } from 'react'
import EntFormCmp from '../components/EntFormCmp';
import EntListCmp from '../components/EntListCmp';

const MainView = (props) => {
    
    const [entList, entListSetter] = useState([]);
    
    return (
        <main>
            <div className="row_flex_left">
                <EntFormCmp entList={entList} entListSetter={entListSetter} />
            </div>
            <div className="row_flex_left">
                <EntListCmp entList={entList} entListSetter={entListSetter} />
            </div>
        </main>
    )
}
export default MainView;
