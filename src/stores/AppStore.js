import Reflux from 'reflux'
import Actions from '../actions/Actions'
import * as HTTP from '../services/http'

class AppStore extends Reflux.Store {
  constructor(){
    super();
    this.listenables = Actions;
    this.state = {
      data: [],
      searchText: ''
    }
  }

  getProducts(){
    const self = this;
    HTTP.get('http://45.181.79.108:8088/wmbd/products')
    .then((response) => {
      console.log('response');
      console.log(response);
      if(response.status) {
        self.setState({ data: [] });
      }else{
        self.setState({ data: response });
      }
    })
  }

  searchProduct(keyword){
    const self = this;
    HTTP.get('http://45.181.79.108:8088/wmbd/products/search?keyword='+keyword)
    .then((response) => {
      console.log(response);
      console.log('response.status');
      if(response.status) {
        self.setState({ data: [] });
      }else{
        self.setState({ data: response });
      }
      
    })
  }
}

export default AppStore;
