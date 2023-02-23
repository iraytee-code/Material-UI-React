import GridComponent from "./components/LayoutComponent/GridComponent";
import { Fragment } from "react";
import MyButtons from "./Layouts/MyButtons";
function App() {
  return (
    <Fragment>
      <GridComponent container={true}>
        <MyButtons />
      </GridComponent>
    </Fragment>
  );
}

export default App;
