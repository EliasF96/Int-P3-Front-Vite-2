import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCardBuy = ({ product }) => {
    const deleteProduct = async () => {
        try {
            let confirm = window.confirm("confirm delete this product?");
            if (confirm) {
                fetch(`${import.meta.env.VITE_API_KEY}/products/`+product._id, {
                    method: "DELETE",
                })
                    .then(response => {
                        return response.json()
                            .then(msg => {
                                return toast.success(msg.message)
                            })
                    })
                    .catch(error => console.log(error))
                setInterval(() => {
                    window.location.reload()
                }, 1000);

            } else {
                toast.error("Action Denied!")
            }
        } catch (e) {
            toast.error("error: " + e)
        }
    }

    return (
        <>
            <Card className='productCardManager'>
                <Card.Body>
                    <Card.Text ><strong>IDProduct: </strong>{product._id} </Card.Text>
                    <Card.Text><strong>Product Name: {product.name}</strong></Card.Text>
                    <Card.Text ><strong>Image: </strong>{product.image} </Card.Text>
                    <Card.Text ><strong>Price: </strong>{product.price} </Card.Text>
                    <Card.Text><strong>Stock: </strong>{product.stock} </Card.Text>
                    <Card.Text> <strong>Mark: </strong>{product.mark}</Card.Text>
                    <Card.Text> <strong>Category: </strong>{product.category}</Card.Text>
                    <Card.Text> <strong>S.Description: </strong>{product.descShort}</Card.Text>
                    <Card.Text> <strong>Delivery: </strong>{product.freeDelivery}</Card.Text>
                    <Card.Text> <strong>Age Since: </strong>{product.ageSince}</Card.Text>
                    <Card.Text> <strong>Age Until: </strong>{product.ageUntil}</Card.Text>

                    <Button variant="outline-danger" onClick={deleteProduct}>Delete Item</Button>
                </Card.Body>
            </Card>
            <ToastContainer />
        </>
    )
}
export default ProductCardBuy