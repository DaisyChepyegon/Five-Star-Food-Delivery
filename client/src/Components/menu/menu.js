const token = Cookie.get('token')
let decode =''
if (token) {
  decode = Jwt(token)
}

class Menu extends React.Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isLoading : true,
            quantity : 1,
        }
    }
     
    /** ADD TO CARTS */
    async onSubmit(id_item){
        const user_id = await decode.id_user
        const item_id = id_item
        const quantity = this.state.quantity
        console.log(user_id, item_id, quantity);
        await this.props.dispatch(addToCart(item_id,user_id,quantity))
        if (this.props.carts.isError) {
            console.log(this.props.carts.isError);
        } else{
            alert('Item Has been add to Cart!!')
        }
      }
    
      
      async componentDidMount(){
        await this.props.dispatch(getItems())
        this.setState({isLoading:this.props.items.isLoading})
        // const {data} = await Axios.get(APP_URL.concat('item'))
        // this.setState({data,isFetched:!this.state.isFetched})
    }
    
    prevButton = async()=>{
        this.setState({
            isLoading: true
        })
        const url = this.props.items.info.previous
        if (url){
            await this.props.dispatch(getButton(url))
            this.setState({
                isLoading: this.props.items.isLoading
            })
        }
    }
    
    