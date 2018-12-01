/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router';
import Item from 'antd/lib/list/Item';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: 'JavaScript 高级程序设计', uid: 1, category: 'javascript' },
        { name: 'JavaScript 语言精粹', uid: 2, category: 'javascript' },
        { name: 'Java 编程思想', uid: 3, category: 'java' },
        { name: 'MySQL 必知必会', uid: 4, category: 'db' }
      ],
      style: {
        display: 'block',
        width: '300px',
        height: '40px',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '3px',
        marginBottom: '10px',
        border: '1px solid #F44336'
      }
    };
  }

  componentDidMount() {
    console.log('Item: ', Item);
  }

  render() {
    const { list, style } = this.state;
    return (
      <div>
        <h4>Product</h4>
        <hr />
        <br />
        {list.map((item, index) => (
          <Link
            key={index}
            style={style}
            to={{
              pathname: `/product/${item.uid}`,
              state: {
                bookName: item.name,
                bookId: item.uid,
                bookCategory: item.category
              }
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }
}

export default Product;
