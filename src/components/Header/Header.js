import React, { useState, useEffect } from 'react';
import { Navbar, Container, NavbarBrand, Nav, Dropdown, Badge, Col, ListGroup, Row } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import { useProduct } from "../../context/state";
import "./Header.css";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
    const [productState, productDispatch] = useProduct();
    const { products } = productState;
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
            products.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [products]);
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavbarBrand>
                    Mini Cart
                </NavbarBrand>
                <Nav>
                    <Dropdown>
                        <Dropdown.Toggle>
                            <Badge><p>${total}</p><p>{products.length} items</p></Badge>
                            <FaShoppingCart color="white" fontSize="25px" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu align="end" style={{ minWidth: 250 }}>
                            {products.length > 0 ? (
                                <ListGroup >
                                    {products.map((prod) => (
                                        <ListGroup.Item key={prod.id}>
                                            <Row>
                                                <Col xs={3} md={2}>
                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() =>
                                                            productDispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }
                                                    />
                                                </Col>
                                                <Col xs={5} md={5}>
                                                    <p> {prod.title} </p> <p>{prod.currency} {prod.price}</p>
                                                </Col>
                                                <Col xs={4} md={4}>
                                                    <p> Qty {prod.qty} </p>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            ) : (
                                <span style={{ padding: 10 }}>Cart is Empty!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;
