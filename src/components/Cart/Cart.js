import React, { useEffect } from "react";
import { useProduct } from "../../context/state";
import { getProducts, setLoading } from "../../context/actions";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { BsPlus, BsDash } from "react-icons/bs";
import "./Cart.css";

const Cart = () => {
    const [productState, productDispatch] = useProduct();
    const { products, loading, error, message } = productState;

    const getProductInfoHandler = async () => {
        await getProducts(productDispatch);
        setLoading(productDispatch, false);
    };

    const getDataFromStorage = JSON.parse(localStorage.getItem('cart') || '[]');
    useEffect(() => {
        if (getDataFromStorage.length === 0) {
            getProductInfoHandler();
        } else {
            productDispatch({
                type: "SET_PRODUCT",
                payload: getDataFromStorage,
            })
            productDispatch({
                type: "SET_LOADING",
                payload: false,
            })
        }
    }, []);

    useEffect (() => {
        localStorage.setItem('cart', JSON.stringify(products));
    }, [products])


    if (loading) {
        return (<p> Loading... </p>);
    }
    return (<div className="productContainer">
        {error && <p> {message} </p>}
        <ListGroup >
            {products.map((prod) => (
                <ListGroup.Item key={prod.id}>
                    <Row>
                        <Col xs={2} md={3} lg={3}>
                            <Image className="cartItemImg" src={prod.image} alt={prod.title} fluid rounded />
                        </Col>
                        <Col xs={5} md={5} lg={5}>
                            <p> {prod.title} </p> <p className="desc"> {prod.desc} </p>
                        </Col>
                        <Col xs={3} md={2} lg={2}>
                            <BsDash
                                onClick={() => productDispatch({
                                    type: "DECREMENT",
                                    payload: {
                                        id: prod.id
                                    },
                                })
                                } >
                            </BsDash>
                            <input type="text" placeholder={prod.qty} disabled />
                            <BsPlus
                                onClick={() => productDispatch({
                                    type: "INCREMENT",
                                    payload: {
                                        id: prod.id
                                    },
                                })
                                } >
                            </BsPlus>
                        </Col>
                        <Col xs={2} md={2} lg={2}> {prod.currency} {prod.price} </Col>
                    </Row>
                </ListGroup.Item>
            ))
            } 
        </ListGroup>
     </div>
    );
};

export default Cart;