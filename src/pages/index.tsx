import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import root from './root';
import Admin from './admin';
import ProjectModal from '../components/ProjectModal';

const Routes = () => {
  const location = useLocation();
  // initialize useRef with initial value of location
  const prevLocationRef: any = React.useRef(location);
  // entry point boolean
  const [isEntryPoint, setIsEntryPoint] = React.useState(true);

  React.useEffect(() => {
    // if prevLocation equal to current location set isEntryPoint to true
    // prevLocation can be equal to current location only on Routes mount
    if (Object.is(prevLocationRef.current, location)) setIsEntryPoint(true);
    else setIsEntryPoint(false);
    // after all necessary work with prevLocationRef, set it to current location
    prevLocationRef.current = location;
  }, [location]);

  const modal = location.state?.modal;

  // helper function to get right location object
  const getSwitchLocation = () => {
    // a case, when modal has been opened by app Link with passed state.modal
    if (modal) return modal;
    // a case, when app accessed from address bar or other website
    // e.g. first entry point being modal
    else if (isEntryPoint) return { ...location, pathname: '/' };
    // otherwise, return original location object
    return location;
  };

  return (
    <>
      <Switch location={getSwitchLocation()}>
        <Route exact path="/" component={root} />
        <Route exact path="/Admin" component={Admin} />
      </Switch>
      {(modal || isEntryPoint) && (
        <Route exact path="/projects/:id" children={<ProjectModal />} />
      )}
    </>
  );
};

export default Routes;
