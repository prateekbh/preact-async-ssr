import {Component, h} from 'preact';
import {Router} from 'preact-router';
import AsyncRoute from 'preact-async-route';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';
export default class App extends Component{
  getProfile(url, cb, props){
    const componentOrPromise = import('../Users');
    if (componentOrPromise.then) {
      return componentOrPromise.then(module => module.default);
    } else if (componentOrPromise.default) {
      cb({component: componentOrPromise.default});
    }
  }

  getHome(url, cb, props){
    const componentOrPromise = import('../Home');
    if (componentOrPromise.then) {
      return componentOrPromise.then(module => module.default);
    } else if (componentOrPromise.default) {
      cb({component: componentOrPromise.default});
    }
  }

  getLoadingComponent(route) {
    if (this.state.ssrShown) {
      return <div>loading...</div>;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: this.state.ssrText }} />;
    }
  }

  componentWillMount(){
    if(typeof document !== "undefined") {
      this.setState({
        ssrText: document.querySelector('.content').innerHTML
      });
    }
  }
  render(props) {
    return(
      <div>
        <Toolbar className="toolbar">
          <Toolbar.Row>
            <Toolbar.Section align-start={true}>
              <Toolbar.Icon menu={true}>menu</Toolbar.Icon>
              <Toolbar.Title>
                My App
              </Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <div class="content">
          <Router {...props}>
            <AsyncRoute loading={this.getLoadingComponent.bind(this, 'Home')} path='/' getComponent={this.getHome}/>
            <AsyncRoute loading={this.getLoadingComponent.bind(this, 'Profile')} path='/users' getComponent={this.getProfile} />
          </Router>
        </div>
      </div>
    )
  }
}