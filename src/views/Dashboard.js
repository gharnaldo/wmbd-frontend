import Reflux from 'reflux';
import AppStore from '../stores/AppStore';
import Actions from '../actions/Actions';
import SearchResults from '../components/SearchResults';
import '../styles/Dashboard.css'
import logo from '../assets/images/logo_original_navbar.png';
import icons_bar from '../assets/images/icons-bar.PNG';


class Dashboard extends Reflux.Component {

componentDidMount(){
  Actions.getProducts();
}

renderTooltip(props) {
    const { active, payload } = props;
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div style={{ backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 1 }}>
          <p>{data.hour}</p>
          <p><span></span>{data.value}</p>
        </div>
      );
    }
    return null;
  }

constructor() {
    super();
    this.state = { };
    this.store = AppStore;
    this.storeKeys = ['data','searchText'];
    //this.showDetail = this.showDetail.bind(this);
}


  onSubmit(e){
    e.preventDefault();
    if(e.target[0].value.length >= 2)
    {
      Actions.searchProduct(e.target[0].value);
    }
  }

  render(){

    return(
      <div className="db-dv">
        <nav className="navbar db-nb">
          <div className="row container-fluid">
            <div className="col-4">
              <a className="navbar-brand" href="#">
                <img src={logo} alt="" />
              </a>
            </div>
            <div className="col-4">
              <form className="justify-content-center" onSubmit={ this.onSubmit }>
                <input name="search" className="form-control" type="text" placeholder="¿Qué estás buscando?" 
                  aria-label="Search" 
                  value={ this.state.searchText } 
                  onChange={ (e) => { this.setState({ searchText: e.target.value }); console.log() } } />
              </form>
            </div>
            <div className="col-4">
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 bg-white">
              <img src={icons_bar} className="mx-auto d-block" />
            </div>
          </div>
          <div className="row">
            <div className="col-7 m-1">
            </div>
          </div>
          <div className="container">
            <div className="row">
                  {this.state.data?.map((item, index) => {
                    item.key = index;
                    return (
                      <div className="col-lg-3 col-sm-6">
                        <div className="card">
                          <img className="card-img-top" src={"http://"+item.image} alt="" />
                          <div className="card-body">
                            <h4 className="card-title"><b>{item.brand}</b>&nbsp;{item.description}</h4>
                            <div className="card-text"><h4><b>${item.finalPrice}</b>&nbsp;<span class="badge badge-pill badge-danger">{item.discount}%</span></h4></div>
                            <div className="card-text"><strike>${item.price}</strike></div>
                            <a href="#" className="btn btn-primary">Agregar</a>
                          </div>
                        </div>                        
                      </div>
                    )
                  })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
