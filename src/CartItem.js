import React from 'react';

class CartItem extends React.Component{

    render()
    {
        const {title,price,qty,img} = this.props.product;
        const {product,increaseQuantity,decreaseQuantity} = this.props
        return(
        <div className='cart-item'>
            <div className='left-block'>
                <img style={style.image}/>
            </div>
            <div className='right-block'>
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs {price}</div>
                <div style={{color:'#777'}}>Qty: {qty}</div>
                <div className='cart-item-actions'>
                    {/* {button} */}
                    <img src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg" 
                    alt="increase" 
                    className='action-icons'
                    onClick={()=>{increaseQuantity(product)}}/>

                    <img src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                    alt="decrease" 
                    className='action-icons' 
                    onClick={()=>{decreaseQuantity(product)}}/>
                    
                    <img src="https://t4.ftcdn.net/jpg/00/98/26/11/240_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                    alt="delete" 
                    className='action-icons'/>
                </div>
            </div>

        </div>
        )
    }
}

const style={
    image:{
        height:100,
        width:100,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;