import React, { useState } from 'react';
import './DataEntry.css';

export default function DataEntry() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCost, setProductCost] = useState('');
    const [productColor, setProductColor] = useState('');
    const [productSize, setProductSize] = useState('');
    const [productStock, setProductStock] = useState('');
    const [productType, setProductType] = useState('');
    const [productImage, setProductImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            item_name: productName,
            description: productDescription,
            price: productCost,
            color_option: productColor,
            size: productSize,
            stock: productStock,
            category_name: productType,
            image_filename: productImage
        };

        try {
            const response = await fetch('http://localhost:12358/newProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productData)
            });

            if (!response.ok) {
                throw new Error('Failed to add product');
            }

            setProductName('');
            setProductDescription('');
            setProductCost('');
            setProductColor('');
            setProductSize('');
            setProductStock('');
            setProductType('');
            setProductImage('');
            setErrorMessage('');
            alert('Product added successfully');
        } catch (error) {
            setErrorMessage('Failed to add product');
        }
    };

    return (
        <div className="data-entry-container">
            <div id="form-space">
                <form className="form-wrapper" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <h1 id="title">Shoe/Product Entry Form</h1>
                        <div className="input">
                            <label className="text-label">Product Name <span className="required">&#42;</span></label>
                            <input className="text" type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder="Enter Item's Name" maxLength="50" required />
                        </div>
                        <div className="input">
                            <label className="text-label">Product Description <span className="required">&#42;</span></label>
                            <input className="text" type="text" value={productDescription} onChange={(e) => setProductDescription(e.target.value)} placeholder="Describe the Product Here" maxLength="255" required />
                        </div>
                        <div className="line-container">
                            <div className="input">
                                <label className="text-label">Product Cost <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productCost} onChange={(e) => setProductCost(e.target.value)} placeholder="USD ($###.##)" maxLength="6" required />
                            </div>
                            <div className="input">
                                <label className="text-label">Product Color <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productColor} onChange={(e) => setProductColor(e.target.value)} placeholder="Predominant Color" maxLength="15" required />
                            </div>
                            <div className="input">
                                <label className="text-label">Product Size <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productSize} onChange={(e) => setProductSize(e.target.value)} placeholder="US Shoe Size" maxLength="4" required />
                            </div>
                            <div className="input">
                                <label className="text-label">Stock Available <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productStock} onChange={(e) => setProductStock(e.target.value)} placeholder="Available Units" maxLength="7" required />
                            </div>
                        </div>
                        <div className="line-container-two">
                            <div className="input">
                                <label className="text-label">Category <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productType} onChange={(e) => setProductType(e.target.value)} placeholder="Men/Women/Kids" maxLength="5" required />
                            </div>
                            <div className="input">
                                <label className="text-label">Image Name <span className="required">&#42;</span></label>
                                <input className="text" type="text" value={productImage} onChange={(e) => setProductImage(e.target.value)} placeholder="example_name.jpg" maxLength="255" required />
                            </div>
                        </div>
                        <div className="button-wrapper">
                            <button className="entry-button" type="submit">List Item</button>
                        </div>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </div>
                </form>
            </div>
        </div>
    );
}
