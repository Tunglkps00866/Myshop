import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Content from './Content';
class Page extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Content content={this.props.content}></Content>
                <Footer></Footer>
            </div>
        );
    }
}
export default Page;