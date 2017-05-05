import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import Table from './Tabel';

class AdvertisementMobile extends Component {
  render() {
    return (<div>
      <Button>Create</Button>
      <Table />
    </div>);
  }
}

export default connect(null, null)(AdvertisementMobile);