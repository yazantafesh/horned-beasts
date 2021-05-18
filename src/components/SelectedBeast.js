import React from 'react';
// import HornsData from './data.json';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {

    handleClose = () => {
      this.props.handleClose();
    }

    render() {
      return (
        <>
          <Modal show={this.props.display} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.element.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.props.element.image_url} className="img-fluid"/>
              <br></br>
              {this.props.element.description}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                            Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );

    }
}

export default SelectedBeast;
