import React, { Component } from 'react'
import { Input } from 'antd';
import { Card, Icon, Avatar } from 'antd';
import API from '../api/api';
import Style from './styles/search.css';

const { Meta } = Card;
const Search = Input.Search;


class Result extends Component{
    constructor(props){
        super(props);
        this.state={
            books:[],
            query:this.props.query,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.query){
            API.getBooksByName(nextProps.query).then(res=>{
                this.setState({books:res.data.books,query:nextProps.query});
            });
        }
    }
    // componentWillMount(){
    //     if(this.props.query){
    //         API.getBooksByName(this.props.query).then(res=>{
    //             this.setState({books:res.data.books,query:this.props.query});
    //         });
    //     }
    // }
    render(){

        let CardList=this.state.books.map(function(book,index){
            let _url=book.image;
            let _u = _url.substring( 7 );
            let cache='https://images.weserv.nl/?url=' + _u;
            return(
                <Card
                key={index}
                className="anime-FadeIn"
                cover={<img alt={book.alt_title} src={cache} />}
                actions={[<Icon type="edit" />, <a href={book.alt}><Icon type="ellipsis" /></a>]}
                >
                <p className="author">{book.author.join(",")}</p>
                <Meta
                title={book.title}
                description={book.summary}
                />

                </Card>
            )
        });
        return(
            <div className="CardList">
                {CardList}
            </div>
        )
    }
}
export default class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state={
            query:"",
        }
    }
  render() {
    return (
      <div className="anime-FadeIn">
          <div className="Logo">

          </div>
        <Search
        className="searchInput"
      placeholder="在此输入想要搜索的书名"
      onSearch={value =>this.setState({query:value})}
      enterButton
    />
    <Result query={this.state.query}></Result>

      </div>
    )
  }
}
