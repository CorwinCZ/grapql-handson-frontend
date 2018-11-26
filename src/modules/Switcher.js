import React, { Component } from 'react';
import { Button } from 'reactstrap';

import Detail from './Detail';
import Listing from './Listing';

class Switcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'listing',
      detailId: false,
    };
  }

  swtichPage = (targetPage, detailId = false) => {
    this.setState({
      currentPage: targetPage,
      detailId: detailId,
    });
  };

  render() {
    const { currentPage, detailId } = this.state;
    return (
      <div>
        <div className="App-header">
          Current page is {currentPage}
          <br />
          <Button
            color="success"
            onClick={() => {
              this.swtichPage('listing');
            }}
          >
            Back to listing
          </Button>
        </div>

        <div className="App-body">
          {currentPage === 'listing' ? (
            <Listing switchToDetail={this.swtichPage} />
          ) : (
            <Detail itemId={detailId} />
          )}
        </div>
      </div>
    );
  }
}

export default Switcher;
