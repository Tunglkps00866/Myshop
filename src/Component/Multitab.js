import React from 'react'
import {Tab} from 'react-bootstrap'
class Multitab extends React.Component{
    render(){
        return(
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Tab 1">
            <Image src={'/'+product.desimg}></Image>
            </Tab>
            <Tab eventKey={2} title="Tab 2">
                Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Tab 3" disabled>
                Tab 3 content
            </Tab>
            </Tabs>
        );
    };
}
export default Multitab;