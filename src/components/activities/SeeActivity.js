import React from 'react'
import { Jumbotron, Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

class SeeActivity extends React.Component {
    render() {
        return (
            <Container>
                <Col md={5} className="mx-auto">
                    <Row className="myrow">

                        <picture>
                            <img alt="Logo Largo" width="100%" src="images/logolargo.png" />
                        </picture>
                    </Row>
                    <Row >
                        <Col>
                            <Row className="fila">
                                <Col>
                                    <div className="card">
                                        <div className="card-body">
                                            <center><p className="card-text">
                                                <div className="hora"><b>Hora inicio:  </b>08:50</div>
                                            </p></center>
                                            <center><p className="card-text">
                                                <div className="hora"><b>Hora fin:  </b>09:00</div>
                                            </p></center>
                                            <center><p className="card-text">
                                                <div className="hora"><b>Pictos</b></div>
                                            </p></center>
                                            <center><p className="card-text">
                                                <div className="hora"><img className="img-thumbnail foto" src="../images/lavar_los_dientes.png" width="80px" />
                                                    <Button type="button" class="boton" >
                                                        <img src="../images/estrella.png" width="20px" />
                                                    </Button></div>
                                            </p></center>
                                            <center><p className="card-text">
                                                <div className="hora"><img className="img-thumbnail foto" src="../images/cepillo_y_pasta_de_dientes.png" width="80px" />
                                                    <Button type="button" class="boton" >
                                                        <img src="../images/estrella1.png" width="20px" />
                                                    </Button></div>
                                            </p></center>
                                            <Col>
                                                <Button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm" >Editar</Button>
                                            </Col>
                                            <Col>
                                                <Button type="submit" className=" btn btn-block mybtn btn-danger tx-tfm" >Eliminar</Button>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Container>
        );
    }


}

export default SeeActivity;