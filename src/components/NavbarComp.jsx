import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./Main";
import ShowImage from "./ShowImage";
import UploadImage from "./UploadImage";
import photo from "../photo1.svg";
import Modal from "./Modal";

export default class NavbarComp extends Component {
  render() {
    let Img = this.props.selectedImg;
    const renderModal = () => {
      if (Img) {
        return (
          <Modal
            setselectedImg={this.props.setselectedImg}
            selectedImg={this.props.selectedImg}
          />
        );
      }
    };

    return (
      <Router>
        <div>
          <Navbar fixed="top" bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand>
              <img
                src={photo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Brand as={Link} to={"/"}>
              HashImage
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link as={Link} to={"/feed"}>
                  Feed
                </Nav.Link>
                <Nav.Link as={Link} to={"/post"}>
                  Post
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/feed">
              <div>
                <ShowImage
                  images={this.props.images}
                  tipImageOwner={this.props.tipImageOwner}
                  setselectedImg={this.props.setselectedImg}
                  openModal={this.props.openModal}
                  unsortView={this.props.unsortView}
                  sortView={this.props.sortView}
                />
                {renderModal()}
              </div>
            </Route>
            <Route path="/post">
              <UploadImage
                captureFile={this.props.captureFile}
                uploadImage={this.props.uploadImage}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
