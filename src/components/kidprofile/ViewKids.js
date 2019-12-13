import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button, ButtonGroup, Media, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './groups.css'
class ViewKids extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteModalOpened: false,
            addModalOpened: false,
            deleteModalOpened: false,
            kidToDelete: "",
            kidToAdd: ""
        };
        this.createKidList = this.createKidList.bind(this);
        this.openDeleteModal = this.openDeleteModal.bind(this);
        this.deleteKid = this.deleteKid.bind(this);
        this.closeDeleteModal = this.closeDeleteModal.bind(this);
        this.goGroups = this.goGroups.bind(this);
        this.goCreateKid = this.goCreateKid.bind(this);
    }
    goGroups(event) {

        event.preventDefault();



        let { from, history } = this.props;


        history.replace(from);


    }

    goCreateKid(event) {

        event.preventDefault();

        let { from2, history } = this.props;


        history.replace(from2);


    }

    closeDeleteModal() {
        this.setState({ kidToDelete: "", idToDelete: "", deleteModalOpened: false });
    }

    deleteKid(event) {
        event.preventDefault();


        this.props.deleteKid(this.state.idToDelete);
        this.setState({ deleteModalOpened: false, kidToDelete: "" });
    }

    openDeleteModal(event, id) {
        let kidName = event.currentTarget.parentNode.previousSibling.innerText;
        this.setState({ kidToDelete: kidName, idToDelete: id, deleteModalOpened: true });
        event.stopPropagation();
    }

    createKidList() {
        let kidlist = [];
        let { from, history } = this.props;
        console.log(this.props)
        this.props.listKids.forEach((row) => {
            if (row.state == "ACCEPTED") {
                kidlist.push(
                    <Row id={row.id} key={row.id} className="myrow">
                        <Col md={10} >
                            <picture>
                                <img src="../images/defaultProfile.jpg" className="group-image" /> {row.name}

                            </picture>
                        </Col>
                        <Col md={2} >
                            <picture onClick={(event) => this.openDeleteModal(event, row.id)}>
                                <img src="../images/papelera.png" width="25px" />
                            </picture>
                        </Col>
                        <Modal isOpen={this.state.deleteModalOpened} toggle={this.closeDeleteModal}>
                            <ModalHeader toggle={this.closeDeleteModal}>Desasociar niño</ModalHeader>
                            <ModalBody>¿Está seguro de que quiere desasociar el niño {this.state.kidToDelete}?</ModalBody>
                            <ModalFooter><Button id={row.id} key={row.id} color="danger" onClick={(event) => this.deleteKid(event)}>Desasociar</Button><Button color="secondary" onClick={this.closeDeleteModal}>Cancelar</Button></ModalFooter>
                        </Modal>
                    </Row>
                );
            }
        });

        kidlist.push(
            <Row onClick={this.goCreateKid}>
                <Col>
                    <picture>
                        <img src="../images/botonNew.svg" className="group-image" /> <font color="#3E8EDE">Añadir niño</font>
                    </picture>
                </Col>

            </Row>
        );

        return kidlist;
    }
    render() {
        let kid = this.createKidList();
        return (
            <Container>
                <Row>
                    <Col md={5} className="mx-auto">
                        <Row>
                            <picture>
                                <img alt="Logo Largo" width="100%" src="images/logolargo.png" />
                            </picture>
                        </Row>
                        <Container>
                            <Row className="mx-auto">
                                <Col md={6} className="btncol">
                                    <Button type="submit" color="primary"
                                        className="btn-block btnbluek tx-tfm">Niños</Button>
                                </Col>
                                <Col md={6} className="btncol" >
                                    <Button type="submit" color="primary"
                                        className="btn-block btnwhitek tx-tfm" onClick={this.goGroups}>Grupos</Button>
                                </Col>
                            </Row>
                            <Row>
                                <Container className='group-list'>
                                    <h5>Niños</h5>

                                    {kid}



                                </Container>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }

}

export default ViewKids;