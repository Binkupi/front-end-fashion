import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux'
import {Link} from "react-router-dom"
class ProductItem extends Component {
    renderClass=(status)=>{
        let result='';
        if(status===2){
            result="hot-sales";
        }else if(status===1){
            result="new-arrivals";
        }
        return result;
    }
    renderStarRate(star){
        let result=[];
        star = Math.round(star);
        for(let i=1;i<=star;i++){
            result.push(<i key={i} className="fa fa-star"></i>);
            
        }
        for(let i=1;i<=5-star;i++){
            result.push(<i key={i+5} className="fa fa-star-o"></i>);
        }
        return result;
    }
    renderOption(status,onChange){
        let result="";
        if(onChange===3){
            result="";
        }else {
            if(status===onChange){
            result="";
            }else{
                result="hideProduct"
            }
        }
        return result;
    }
    onClick=(e)=>{
        e.preventDefault();
        var {token,history}=this.props;
        if(!token){
            history.replace('/login');
        }else{
            const{sku,slug,price,name,images,options}=this.props.product;
        let i = 0;
        while(options[i].remaining === 0)
            i++;
        var size=options[i].size;
        var inventory=options[i].remaining;
        var quantity=inventory===0?0:1;
    
        const cartItem={
            sku:sku,
            name:name,
            images:images,
            slug:slug,
            price:price,
            size:size,
            inventory:inventory,
            quantity:quantity,
            options:options,
            index:0,

        }  
                           
        this.props.onAddToCart(cartItem);
        }
         
    }
    
    refreshPage=()=>{ 
        window.location.reload(); 
    }
    
    render(){
        const{sku,images,name,price,status,rating}=this.props.product;
        const {onChange,onPage}=this.props;
        const addClass=this.renderClass(status);
        const result=onPage===1?` ${addClass} ${this.renderOption(status,onChange)}`:'';
        
        
        return (
            <Fragment>
                <div className={`${onPage===1?'col-lg-3':'col-lg-4'} col-md-6 col-sm-6 col-md-6 col-sm-6 mix ${result}`} >
                    <div className="product__item">
                        <div className="product__item__pic " style={{backgroundImage:`url(${process.env.REACT_APP_API_URL}${images[0]})`, backgroundSize: 'cover'}} >
                        <span className="label label--sales" style={{display:`${status!==2?'none':'block'}`}}>Sale</span>
                            <ul className="product__hover">
                                <li><button type="button" onClick={this.onClick} className="btn--square border"><i className="fa fa-cart-plus" aria-hidden="true"></i></button></li>
                            </ul>
                        </div>
                        <div className="product__item__text">
                            <h6>
                                <Link to={"/" + sku}>{name}</Link>
                            </h6>
                            <div className="rating">
                                {this.renderStarRate(rating.grade)}
                            </div>
                            <h5>{price.toLocaleString('de-DE')}đ</h5>
                        </div>
                    </div>
                </div>

            </Fragment>
            
        );
    }
  
}

const mapStateToProps=(state)=>{
    return {
        ...state.authorization,
    }
  }
  const mapDispatchToProps=(dispatch)=>{
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);